import { useContext } from "react";
import { ThemeContext } from "./main";

const App = () => {
  const [theme, toggleTheme] = useContext(ThemeContext);
  console.log("theme", theme);

  return (
    <div
      style={{
        alignItems: "center",
        margin: "auto",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          background: theme.background,
          color: theme.foreground,
          height: "50rem",
        }}
      >
        <button onClick={toggleTheme}>Toggle theme</button>
      <p>Lorem ipsum dolor sit, adipisicing. Similique facilis placeat quisquam consequatur doloribus illo quam, consequuntur omnis id quis alias qui facere totam inventore labore voluptate accusantium molestiae enim. Necessitatibus eligendi optio possimus numquam, aut soluta corrupti pariatur fugit asperiores animi qui saepe! Inventore magnam officia doloremque, dolorum tempore soluta? Sunt officia corporis dolorum minus voluptatem modi, fugit repudiandae, sit debitis corrupti sapiente aperiam perferendis enim expedita! Accusamus dolorem quos voluptatum, sequi nesciunt voluptatibus molestiae eveniet! Officia, quo, hic magni dignissimos alias vitae exercitationem explicabo obcaecati saepe repellendus accusantium corrupti ad. Blanditiis iusto omnis nesciunt provident quidem.</p>
      </h1>
    </div>
  );
};

export default App;
