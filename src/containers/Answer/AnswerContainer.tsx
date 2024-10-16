"use client";

import { Banner } from "@/components/Banner";
import { CheckAnswer } from "@/components/Tables";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { TestInfo } from "../../../types/Item";
import { ProblemCount } from "../../../utils/problemCount";
import { useRecoilValue } from "recoil";
import { testInfoState } from "@/recoil/atoms";
import { IoChevronBackOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

const AnswerContainer = ({ id }: { id: number }) => {
	const testInfo = useRecoilValue<TestInfo>(testInfoState);
	const router = useRouter();

	return (
		<div className="p-4">
			<div className="flex gap-2">
				<IoChevronBackOutline
					size={36}
					className="cursor-pointer"
					onClick={() => router.back()}
				/>
				<Link href="/" className="inline-block">
					<Banner />
				</Link>
			</div>
			<div className="h-16 text-white px-6 my-2 text-xl font-bold bg-orange-400 rounded-lg flex items-center">
				오답을 체크하고 답을 입력하세요!
			</div>
			<CheckAnswer problemCount={ProblemCount[testInfo.subject]} id={id} />
		</div>
	);
};

export default AnswerContainer;
