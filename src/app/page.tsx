import Image from "next/image";
import Link from "next/link";

export default function Page() {
	return (
		<div className="flex-col justify-center items-center h-[4000px] bg-gradient-to-b from-[#ffffff] to-[#FC6C02]">
			<Image
				src="/example_images/landing.png"
				width={550}
				height={550}
				alt="랜딩 페이지"
				layout="responsive"
			/>

			<button className="fixed w-64 bottom-5 left-1/2 transform -translate-x-1/2 bg-[#FC6C02] active:bg-gray-100 text-white active:text-[#FC6C02] font-bold border-b py-3 px-6 rounded-full shadow-xl text-xl">
				<Link href="/searchmo">모플 써보러 가기</Link>
			</button>
		</div>
	);
}
