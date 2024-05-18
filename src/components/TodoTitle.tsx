import { memo } from "react";
import classes from "./CssModules.module.scss";

// タイトルの表示コンポーネント
export const TodoTitle = memo(({ title, as }: { title: string; as: string}) => {
    if (as === "h1") {
        return <h1 className={classes.title}>{title}</h1>;
    } else if (as === "h2") {
        return <h2 className={classes.title}>{title}</h2>;
    } else {
        return <p>{title}</p>;
    }
});
