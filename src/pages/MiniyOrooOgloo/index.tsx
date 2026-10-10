import React from "react";
export default (props) => {
	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-[#F7F6FC] pb-[41px] overflow-hidden">
				<div className="flex justify-between items-center self-stretch bg-white py-[23px] px-12">
					<div className="flex shrink-0 items-center gap-2.5">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/4td2g7uu_expires_30_days.png"} 
							className="w-9 h-9 rounded-xl object-fill"
						/>
						<span className="text-[#28233D] text-[22px] font-bold" >
							StudyQuest
						</span>
					</div>
					<button className="flex shrink-0 items-center bg-[#EEE9FF] text-left py-1.5 px-3 gap-1.5 rounded-[100px] border-0"
						onClick={()=>alert("Pressed!")}>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/1ao1y3w9_expires_30_days.png"} 
							className="w-[15px] h-[15px] rounded-[100px] object-fill"
						/>
						<span className="text-[#7C5CFC] text-xs font-bold" >
							Миний өрөө
						</span>
					</button>
					<div className="flex shrink-0 items-center gap-5">
						<div className="flex shrink-0 items-center gap-1.5">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/zpqbsy15_expires_30_days.png"} 
								className="w-5 h-5 object-fill"
							/>
							<span className="text-[#28233D] text-sm font-bold" >
								2,480 XP
							</span>
						</div>
						<div className="flex shrink-0 items-center gap-1.5">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/1j84rzpy_expires_30_days.png"} 
								className="w-5 h-5 object-fill"
							/>
							<span className="text-[#28233D] text-sm font-bold" >
								7 өдөр
							</span>
						</div>
						<button className="flex flex-col shrink-0 items-start bg-[#EEE9FF] text-left py-[9px] px-[15px] rounded-[100px] border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-[#5038B2] text-base font-bold" >
								Т
							</span>
						</button>
						<span className="text-[#28233D] text-sm font-bold" >
							Тэмүүлэн
						</span>
					</div>
				</div>
				<div className="flex justify-between items-start self-stretch px-16">
					<div className="flex flex-col shrink-0 items-start mt-8 gap-1.5">
						<span className="text-[#28233D] text-3xl font-bold mr-[31px]" >
							Өглөөний мэнд, Тэмүүлэн!
						</span>
						<span className="text-[#817B94] text-base" >
							Мэдлэгийн шинэ өдөр эхэллээ. Өнөөдөр юуг нээх вэ?
						</span>
					</div>
					<button className="flex shrink-0 items-center bg-[#FFF2DA] text-left py-1.5 px-3 mt-[54px] gap-1.5 rounded-[100px] border-0"
						onClick={()=>alert("Pressed!")}>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/boltrtuh_expires_30_days.png"} 
							className="w-[15px] h-[15px] rounded-[100px] object-fill"
						/>
						<span className="text-[#A66B1D] text-xs font-bold" >
							7 өдрийн цуврал • Гайхалтай!
						</span>
					</button>
				</div>
				<div className="flex items-start self-stretch relative">
					<div className="w-[1086px] my-[29px] ml-16 mr-[75px]">
						<div className="items-start self-stretch pb-[344px]">
							<div className="flex flex-col items-end self-stretch">
								<div className="flex flex-col items-start bg-cover bg-center w-[860px] pt-[68px]">
									<div className="flex flex-col items-end self-stretch mb-1.5">
										<div className="flex items-start mr-[66px] gap-[22px]">
											<button className="flex shrink-0 items-center bg-[#7C5CFC] text-left py-3 px-4 mt-[23px] gap-2 rounded-2xl border border-solid border-[#5038B2]" 
												style={{
													boxShadow: "0px 8px 28px #45307808"
												}}
												onClick={()=>alert("Pressed!")}>
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/d2yqydr9_expires_30_days.png"} 
													className="w-[18px] h-[18px] rounded-2xl object-fill"
												/>
												<span className="text-white text-sm font-bold" >
													Дадлага хийх
												</span>
											</button>
											<button className="flex shrink-0 items-center bg-white text-left py-3 px-4 gap-2 rounded-2xl border border-solid border-[#EAE6F3]" 
												style={{
													boxShadow: "0px 8px 28px #45307808"
												}}
												onClick={()=>alert("Pressed!")}>
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/e8n5tg0q_expires_30_days.png"} 
													className="w-[18px] h-[18px] rounded-2xl object-fill"
												/>
												<span className="text-[#28233D] text-sm font-bold" >
													Чансаа
												</span>
											</button>
										</div>
									</div>
									<div className="flex flex-col items-end self-stretch mb-[52px]">
										<div className="items-start w-[130px] pb-[74px] mr-[193px]">
											<div className="bg-[#7C5CFC14] w-[105px] h-32 rounded-[18px] border-[3px] border-solid border-[#7C5CFC]">
											</div>
											<div className="flex flex-col items-end self-stretch">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/aagcmr3f_expires_30_days.png"} 
													className="w-[26px] h-[30px] object-fill"
												/>
											</div>
										</div>
									</div>
									<button className="flex items-center bg-white text-left py-3 px-4 mb-[60px] ml-[105px] gap-2 rounded-2xl border border-solid border-[#EAE6F3]" 
										style={{
											boxShadow: "0px 8px 28px #45307808"
										}}
										onClick={()=>alert("Pressed!")}>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/4fjdlh3q_expires_30_days.png"} 
											className="w-[18px] h-[18px] rounded-2xl object-fill"
										/>
										<span className="text-[#28233D] text-sm font-bold" >
											Амрах · Гарах
										</span>
									</button>
									<button className="flex flex-col items-start bg-white text-left py-3 px-[18px] mb-[111px] ml-[415px] rounded-2xl border-0" 
										style={{
											boxShadow: "0px 8px 28px #45307808"
										}}
										onClick={()=>alert("Pressed!")}>
										<span className="text-[#28233D] text-sm" >
											Өнөөдөр React сурцгаая!
										</span>
									</button>
								</div>
							</div>
							<div className="flex flex-col items-start bg-white w-[228px] p-5 gap-3 rounded-3xl border border-solid border-[#EAE6F3]">
								<button className="flex items-center bg-[#EEE9FF] text-left py-1.5 px-3 gap-1.5 rounded-[100px] border-0"
									onClick={()=>alert("Pressed!")}>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/ktb8fv0v_expires_30_days.png"} 
										className="w-[15px] h-[15px] rounded-[100px] object-fill"
									/>
									<span className="text-[#7C5CFC] text-xs font-bold" >
										ӨНӨӨДРИЙН ЗОРИЛГО
									</span>
								</button>
								<span className="text-[#28233D] text-xl font-bold" >
									Нэг алхам урагш
								</span>
								<span className="text-[#817B94] text-sm w-[165px]" >
									1 хичээл дуусгаад 50 XP цуглуулаарай.
								</span>
								<span className="text-[#7C5CFC] text-[13px] font-bold" >
									0 / 1 хичээл
								</span>
							</div>
						</div>
					</div>
					<button className="flex flex-col shrink-0 items-start bg-white text-left absolute bottom-[286px] right-[235px] py-3 px-4 rounded-2xl border border-solid border-[#EAE6F3]" 
						style={{
							boxShadow: "0px 8px 28px #45307808"
						}}
						onClick={()=>alert("Pressed!")}>
						<div className="flex items-center gap-2">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/zdx249mv_expires_30_days.png"} 
								className="w-[18px] h-[18px] rounded-2xl object-fill"
							/>
							<span className="text-[#28233D] text-sm font-bold" >
								Судлах
							</span>
						</div>
					</button>
					<div className="flex shrink-0 items-center mt-[540px] gap-2">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/jokud5nk_expires_30_days.png"} 
							className="w-5 h-5 object-fill"
						/>
						<span className="text-[#817B94] text-[13px]" >
							08:30 · Өглөө
						</span>
					</div>
				</div>
				<div className="flex justify-center items-center self-stretch gap-2.5">
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/1iyptbl6_expires_30_days.png"} 
						className="w-[17px] h-[17px] object-fill"
					/>
					<span className="text-[#817B94] text-sm" >
						Өрөөний эд зүйлс дээр очоод дараагийн аяллаа сонгоорой.
					</span>
				</div>
			</div>
		</div>
	)
}