// Components
import { Edit, Trash2, Download } from "react-feather";
import { Button } from "react-bootstrap";

type Icons = "edit" | "delete" | "save";

type IconButtonProps = {
    iconName: Icons;
    handleOnClick: () => void;
};

export const IconButton = ({ iconName, handleOnClick }: IconButtonProps) => {
    const getIconFromName = (iconName: Icons) => {
        switch (iconName) {
            case "delete":
                return <Trash2 />;
            case "edit":
                return <Edit />;
            case "save":
                return <Download />;
        }
    };
    const icon = getIconFromName(iconName);

    return <Button onClick={handleOnClick}>{icon}</Button>;
};
