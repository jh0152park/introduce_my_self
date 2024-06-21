import PointDot from "../common/point-dot";

export default function Education() {
    return (
        <div className="flex flex-col items-start justify-start w-full gap-5 py-10">
            <div className="flex items-center justify-start *:font-bold *:text-4xl">
                <span>한양대학교 ERICA</span>
                <PointDot />
            </div>
            <div className="flex flex-col items-start justify-start *:font-semibold">
                <span>융합공학과</span>
                <span>2019.03 ~ 2023.02</span>
            </div>
            <span className="font-semibold">
                삼성전자 재직과 동시에 한양대학교ERICA 융합공학과 학부에 입학해
                4년간 컴퓨터 구조, 알고리즘, CPU 구조 등의 과목을 우수한
                성적으로 이수하였습니다.
            </span>
        </div>
    );
}
