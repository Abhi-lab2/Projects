
import puppeteer from 'puppeteer';

const USERNAME = 'ABC@gmail.com'
const PASSWORD = 'abc'
const MESSAGE = `my message`;

const targetUsers = [
    'abc',
    'user_name here'
];

const sendMessages = async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.linkedin.com/login')

    // Log in
    await page.type('#username', USERNAME);
    await page.type('#password', PASSWORD);
    await page.click('button[type="submit"]');
    await page.waitForNavigation();

    // Navigate to the 'My Network' page and wait for elements to load
    await page.goto('https://www.linkedin.com/mynetwork/invite-connect/connections/');
    await page.waitForSelector('.mn-connection-card__details', { timeout: 10000 });

    // Extract connection names and profiles
    const connections = await page.evaluate(() => {
        const connectionElements = document.querySelectorAll('.mn-connection-card__details');
        const connections = [];
        connectionElements.forEach((element) => {
            const nameElement = element.querySelector('.mn-connection-card__name');
            const profileUrlElement = element.querySelector('a.mn-connection-card__link');
            if (nameElement && profileUrlElement) {
                connections.push({ name: nameElement.textContent.trim(), profileUrl: profileUrlElement.href });
            }
        });
        return connections;
    });


    // Filter connections based on target users
    const filteredConnections = connections.filter(connection =>
        targetUsers.includes(connection.profileUrl) || targetUsers.includes(connection.name)
    );


    // Send messages to filtered connections
    for (const connection of filteredConnections) {
        try {
            await page.goto(connection.profileUrl);
            await page.waitForSelector('.pv-s-profile-actions--message', { timeout: 15000 });

            const messageButton = await page.$('.pv-s-profile-actions--message');
            if (messageButton) {
                await messageButton.click();
                await page.waitForSelector('.msg-form__contenteditable', { timeout: 15000 });

                const personalizedMessage = MESSAGE.replace('[Connection\'s Name]', connection.name);
                await page.type('.msg-form__contenteditable', personalizedMessage);
                await page.waitForSelector('button.msg-form__send-button', { timeout: 15000 });
                const sendButton = await page.$('button.msg-form__send-button');

                if (sendButton) {
                    await sendButton.click();
                    await page.waitForTimeout(3000)
                    console.log(`Message sent to ${connection.name}`)
                } else {
                    console.log(`Send button not fontd for ${connection.name}`)
                }
            } else {
                console.log(`Message button not found for ${connection.name}`)
            }
        } catch (error) {
            console.error(`Error sending message to ${connection.name}:`, error)
        }
    }

    await browser.close();
};

sendMessages().catch(console.error);