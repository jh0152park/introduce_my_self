import { POINT_COLOR } from "@/global/style";

export default function Title() {
    return (
        <div className="flex flex-col items-start justify-center w-full gap-5 *:font-bold *:text-7xl">
            <span>안녕하세요,</span>
            <div className="flex items-center justify-start">
                <span>저는 박재현입니다</span>
                <span className={`text-[${POINT_COLOR.dark}]`}>.</span>
            </div>
        </div>
    );
}
