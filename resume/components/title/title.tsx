import { POINT_COLOR } from "@/global/style";

export default function Title() {
    return (
        <div className="flex flex-col items-start justify-center w-full gap-10 ">
            <div className="*:font-bold *:text-7xl flex flex-col">
                <span>안녕하세요,</span>
                <div className="flex items-center justify-start ">
                    <span>저는 박재현입니다</span>
                    <span className={`text-[${POINT_COLOR.dark}]`}>.</span>
                </div>
            </div>

            <div className="w-full text-3xl font-normal text-left">
                Android System Engineer에서 Web Front Engineer를 목표로 정진하고
                있습니다. 간결하고 직관적인 인터페이스를 구현하는 것을
                좋아합니다. 개발자의 가치는 비즈니스를 통해 유저를 락인
                시키는것에서 시작한다고 믿습니다. 주도적으로 업무에 몰입할수
                있는 환경을 선호합니다.
            </div>
        </div>
    );
}
