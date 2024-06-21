import { POINT_COLOR } from "@/global/style";
import { styleCombine } from "@/utils/style/style-combine";

export default function Header() {
    return (
        <div
            className={styleCombine([
                "w-full h-[10px] bg-gradient-to-r fixed top-0",
                `from-[${POINT_COLOR.dark}]`,
                `to-[${POINT_COLOR.light}]`,
            ])}
        ></div>
    );
}
