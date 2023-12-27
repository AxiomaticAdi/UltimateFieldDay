import React from "react";

type EquipmentBadgeProps = {
    color: "green" | "red";
    equipment: string;
    equipmentList: string[];
    setEquipmentList: (value: string[]) => void;
};

const Badge: React.FC<EquipmentBadgeProps> = ({
    color,
    equipment,
    equipmentList,
    setEquipmentList,
}) => {
    const handleClose = () => {
        setEquipmentList(equipmentList.filter((item) => item !== equipment));
    };

    if (color === "green")
        return (
            <div className={`inline-flex items-center justify-center text-sm`}>
                <div className={`rounded-l-md bg-green-200 px-2 text-black`}>
                    {equipment}
                </div>
                <button
                    onClick={handleClose}
                    className={`rounded-r-md bg-green-300 px-2 text-black`}
                >
                    X
                </button>
            </div>
        );
    else
        return (
            <div className={`inline-flex items-center justify-center text-sm`}>
                <div className={`rounded-l-md bg-red-200 px-2 text-black`}>
                    {equipment}
                </div>
                <button
                    onClick={handleClose}
                    className={`rounded-r-md bg-red-300 px-2 text-black`}
                >
                    X
                </button>
            </div>
        );
};

export default Badge;
