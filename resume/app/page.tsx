import Header from "@/components/navigate/header";
import Title from "@/components/title/title";

export default function Home() {
    return (
        <div className="flex items-start justify-center w-full">
            <Header />
            <main className="p-[5%] w-full h-screen max-w-[800px] ">
                <Title />
            </main>
        </div>
    );
}
