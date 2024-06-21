import { POINT_COLOR } from "@/global/style";

export default function Header() {
    return (
        <div
            className={`w-full h-[10px] bg-gradient-to-r fixed top-0 from-[${POINT_COLOR.dark}] to-[${POINT_COLOR.light}]`}
        ></div>
    );
}
