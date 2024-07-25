import PointDot from "../common/point-dot";

export default function Title() {
    return (
        <div className="flex flex-col items-start justify-center w-full gap-10 ">
            <div className="*:font-bold *:text-4xl *:sm:text-7xl flex flex-col">
                <span>안녕하세요,</span>
                <div className="flex items-center justify-start ">
                    <span>저는 박재현입니다</span>
                    <PointDot />
                </div>
            </div>

            <div className="w-full text-xl font-normal text-left sm:text-3xl">
                Android System Engineer에서 또 다른 재밌는 세계를 탐색하고 있는
                중 입니다! 자동화와 비효율적인 부분을 개선 하는것을 좋아하고
                조직의 성과를 최우선으로 하고있습니다. 주도적으로 업무에
                몰입할수 있는 환경을 선호합니다. 🙂
                {/* Android System Engineer에서 Web Front Engineer를 목표로 정진하고
                있습니다. 간결하고 직관적인 인터페이스를 구현하는 것을
                좋아합니다. 조직의 성과와 개인의 성장을 최우선으로 하고있습니다.
                주도적으로 업무에 몰입할수 있는 환경을 선호합니다. */}
            </div>
        </div>
    );
}
