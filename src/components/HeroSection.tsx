import { type FC } from "react";

export const HeroSection: FC = () => {
    return (
        <main className="flex place-content-between place-items-center">
            <div>
                <p className="text-3xl font-extrabold text-primary-600">Eng.</p>
                <h1 className="text-7xl font-extrabold max-w-min">
                    Hashem Wannous
                    <span className="text-primary-600">.</span>
                </h1>
                <hr className="border-primary-600 border-4 rounded-full max-w-18 mt-3" />
            </div>
            <div className="w-[40%] p-4 relative [&_hr]:border-primary-600 [&_hr]:bg-primary-600">
                <img
                    src="/images/profile_picture.jpg"
                    alt="My Personal Professional Image."
                />
                <hr className="border-2 absolute top-[-7px] left-[calc(50%+var(--spacing)*4+7px)] h-[calc(14px+var(--spacing)*4)] -rotate-45" />
                <hr className="border-2 absolute top-[-4px] left-4 w-1/2" />
                <hr className="border-2 absolute top-[-6.75px] left-[5px] h-[calc(12px+var(--spacing)*4)] rotate-45" />
                <hr className="border-2 absolute top-4 left-[-4px] h-[calc(100%-var(--spacing)*12-4px)]" />
                <hr className="border-2 absolute bottom-[calc(var(--spacing)*4-3px)] left-[5.25px] h-[calc(12px+var(--spacing)*4)] -rotate-45" />
                <hr className="border-2 absolute bottom-4 left-4 w-1/2" />
                <hr className="border-2 absolute bottom-[-7px] left-[calc(50%+var(--spacing)*4+7px)] h-[calc(14px+var(--spacing)*4)] -rotate-45" />
                <hr className="border-2 absolute bottom-[-4px] left-[calc(50%+var(--spacing)*8)] w-[calc(50%-var(--spacing)*12)]" />
                <hr className="border-2 absolute bottom-[-6.75px] right-[5px] h-[calc(12px+var(--spacing)*4)] rotate-45" />
                <hr className="border-2 absolute top-[calc(var(--spacing)*8+4px)] right-[-4px] h-[calc(100%-var(--spacing)*12-4px)]" />
                <hr className="border-2 absolute top-[calc(var(--spacing)*4-3px)] right-[5.25px] h-[calc(12px+var(--spacing)*4)] -rotate-45" />
                <hr className="border-2 absolute top-4 left-[calc(50%+var(--spacing)*8)] w-[calc(50%-var(--spacing)*12)]" />
                <span className="absolute top-[-5px] left-[-10px] border-x-8 border-x-transparent border-b-8 border-b-primary-600 -rotate-45" />
                <span className="absolute bottom-[-5px] right-[-10px] border-x-8 border-x-transparent border-t-8 border-t-primary-600 -rotate-45" />
                <div className="flex absolute top-[-4px] gap-2 left-[calc(50%+var(--spacing)*8)] w-[calc(50%-var(--spacing)*14)] h-[calc(var(--spacing)*4-2px)] skew-x-45 [&_span]:bg-primary-600">
                    <span className="h-full grow-[0.8]" />
                    <span className="h-full grow-[0.1]" />
                    <span className="h-full grow-[0.1]" />
                </div>
                <div className="flex absolute bottom-[-4px] gap-2 right-[calc(50%-var(--spacing)*4)] w-[calc(50%-var(--spacing)*2)] h-[calc(var(--spacing)*4-2px)] skew-x-45 [&_span]:bg-primary-600">
                    <span className="h-full grow-[0.1]" />
                    <span className="h-full grow-[0.1]" />
                    <span className="h-full grow-[0.8]" />
                </div>
            </div>
        </main>
    );
};
