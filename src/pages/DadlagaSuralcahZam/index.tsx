import React from "react";
export default (props) => {
	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-[#F7F6FC] pb-[18px] overflow-hidden">
				<div className="flex justify-between items-center self-stretch bg-white py-[23px] px-12">
					<div className="flex shrink-0 items-center gap-2.5">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/icds5go7_expires_30_days.png"} 
							className="w-9 h-9 rounded-xl object-fill"
						/>
						<span className="text-[#28233D] text-[22px] font-bold" >
							StudyQuest
						</span>
					</div>
					<div className="flex shrink-0 items-center">
						<div className="flex shrink-0 items-center py-2.5 px-3.5 mr-[17px] gap-2">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/a8agzyui_expires_30_days.png"} 
								className="w-[18px] h-[18px] object-fill"
							/>
							<span className="text-[#28233D] text-sm font-bold" >
								Өрөө рүү
							</span>
						</div>
						<button className="flex flex-col shrink-0 items-start bg-[#EEE9FF] text-left py-2.5 px-[18px] mr-2 rounded-[10px] border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-[#7C5CFC] text-sm font-bold" >
								Дадлага
							</span>
						</button>
						<button className="flex flex-col shrink-0 items-start bg-white text-left py-2.5 px-[18px] mr-2 rounded-[10px] border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-[#817B94] text-sm font-bold" >
								Судлах
							</span>
						</button>
						<button className="flex flex-col shrink-0 items-start bg-white text-left py-2.5 px-[18px] rounded-[10px] border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-[#817B94] text-sm font-bold" >
								Чансаа
							</span>
						</button>
					</div>
					<div className="flex shrink-0 items-center gap-5">
						<div className="flex shrink-0 items-center gap-1.5">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/rs03ithj_expires_30_days.png"} 
								className="w-5 h-5 object-fill"
							/>
							<span className="text-[#28233D] text-sm font-bold" >
								2,480 XP
							</span>
						</div>
						<div className="flex shrink-0 items-center gap-1.5">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/0kk2tbgb_expires_30_days.png"} 
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
				<div className="flex flex-col self-stretch py-6 px-12 gap-5">
					<div className="flex justify-between items-center self-stretch">
						<div className="flex flex-col shrink-0 items-start gap-0.5">
							<span className="text-[#28233D] text-[28px] font-bold" >
								Мэдлэгээ нэг алхмаар ахиул
							</span>
							<span className="text-[#817B94] text-sm mr-9" >
								Хичээлээ сонгоод, суралцах замаа үргэлжлүүлээрэй.
							</span>
						</div>
						<button className="flex shrink-0 items-center bg-[#EEE9FF] text-left py-1.5 px-3 gap-1.5 rounded-[100px] border-0"
							onClick={()=>alert("Pressed!")}>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/2n41rcqg_expires_30_days.png"} 
								className="w-[15px] h-[15px] rounded-[100px] object-fill"
							/>
							<span className="text-[#7C5CFC] text-xs font-bold" >
								Өнөөдрийн зорилго: 50 XP
							</span>
						</button>
					</div>
					<div className="flex items-center self-stretch">
						<div className="flex flex-1 items-center bg-[#EEE9FF] py-[23px] px-[18px] mr-4 gap-4 rounded-2xl border-2 border-solid border-[#7C5CFC]">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/v1wyqt8s_expires_30_days.png"} 
								className="w-12 h-12 rounded-[14px] object-fill"
							/>
							<div className="flex flex-1 flex-col items-start gap-[7px]">
								<span className="text-[#28233D] text-[15px] font-bold" >
									Веб систем ба технологи
								</span>
								<div className="flex items-center gap-2.5">
									<div className="shrink-0 items-start bg-[#EAE6F3] pr-[116px] rounded-[100px]">
										<div className="bg-[#7C5CFC] w-[84px] h-2 rounded-[100px]">
										</div>
									</div>
									<span className="text-[#817B94] text-xs" >
										42%
									</span>
								</div>
							</div>
						</div>
						<div className="flex flex-1 items-center bg-white py-[23px] px-[18px] mr-[17px] gap-[15px] rounded-2xl border border-solid border-[#EAE6F3]">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/ljkv5foj_expires_30_days.png"} 
								className="w-12 h-12 rounded-[14px] object-fill"
							/>
							<div className="flex flex-1 flex-col items-start gap-[7px]">
								<span className="text-[#28233D] text-[15px] font-bold" >
									Өгөгдлийн бүтэц
								</span>
								<div className="flex items-center gap-2.5">
									<div className="shrink-0 items-start bg-[#EAE6F3] pr-[164px] rounded-[100px]">
										<div className="bg-[#7C5CFC] w-9 h-2 rounded-[100px]">
										</div>
									</div>
									<span className="text-[#817B94] text-xs" >
										18%
									</span>
								</div>
							</div>
						</div>
						<div className="flex flex-1 items-center bg-white py-[23px] px-[18px] gap-[15px] rounded-2xl border border-solid border-[#EAE6F3]">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/hcn6h1tm_expires_30_days.png"} 
								className="w-12 h-12 rounded-[14px] object-fill"
							/>
							<div className="flex flex-1 flex-col items-start gap-[7px]">
								<span className="text-[#28233D] text-[15px] font-bold" >
									Математик II
								</span>
								<div className="flex items-center gap-2.5">
									<div className="shrink-0 items-start bg-[#EAE6F3] pr-[184px] rounded-[100px]">
										<div className="bg-[#7C5CFC] w-4 h-2 rounded-[100px]">
										</div>
									</div>
									<span className="text-[#817B94] text-xs" >
										8%
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="self-stretch bg-white rounded-3xl border border-solid border-[#EAE6F3]">
						<div className="flex justify-between items-center self-stretch bg-[#EEE9FF] py-[13px] px-7">
							<div className="flex shrink-0 items-center gap-3.5">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/cg7yd85v_expires_30_days.png"} 
									className="w-[25px] h-[25px] object-fill"
								/>
								<div className="flex flex-col shrink-0 items-start gap-0.5">
									<span className="text-[#7C5CFC] text-[11px] font-bold mr-[163px]" >
										2-Р БҮЛЭГ
									</span>
									<span className="text-[#28233D] text-[19px] font-bold" >
										Интерактив веб бүтээх
									</span>
								</div>
							</div>
							<div className="flex shrink-0 items-center gap-2">
								<button className="flex shrink-0 items-center bg-white text-left py-1.5 px-3 gap-1.5 rounded-[100px] border-0"
									onClick={()=>alert("Pressed!")}>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/8relph12_expires_30_days.png"} 
										className="w-[15px] h-[15px] rounded-[100px] object-fill"
									/>
									<span className="text-[#817B94] text-xs font-bold" >
										1 · Веб суурь
									</span>
								</button>
								<button className="flex flex-col shrink-0 items-start bg-[#7C5CFC] text-left py-[5px] px-3 rounded-[100px] border-0"
									onClick={()=>alert("Pressed!")}>
									<span className="text-white text-xs font-bold" >
										2 · React
									</span>
								</button>
								<button className="flex shrink-0 items-center bg-white text-left py-1.5 px-3 gap-1.5 rounded-[100px] border-0"
									onClick={()=>alert("Pressed!")}>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/j0vspbdz_expires_30_days.png"} 
										className="w-[15px] h-[15px] rounded-[100px] object-fill"
									/>
									<span className="text-[#817B94] text-xs font-bold" >
										3 · API
									</span>
								</button>
							</div>
							<span className="text-[#5038B2] text-sm font-bold" >
								3 / 7 хичээл дууссан
							</span>
						</div>
						<div className="self-stretch pt-[18px]">
							<div className="flex justify-between items-center self-stretch mb-[70px] ml-9 mr-[60px]">
								<div className="flex shrink-0 items-center gap-2">
									<button className="flex flex-col shrink-0 items-start bg-[#E7F6EF] text-left py-1.5 px-3 rounded-[100px] border-0"
										onClick={()=>alert("Pressed!")}>
										<span className="text-[#278467] text-xs font-bold" >
											НЭГЖ 1
										</span>
									</button>
									<span className="text-[#817B94] text-[13px] font-bold" >
										Вебийн үндэс
									</span>
								</div>
								<div className="flex shrink-0 items-center gap-2">
									<button className="flex flex-col shrink-0 items-start bg-[#EEE9FF] text-left py-1.5 px-3 rounded-[100px] border-0"
										onClick={()=>alert("Pressed!")}>
										<span className="text-[#7C5CFC] text-xs font-bold" >
											НЭГЖ 2
										</span>
									</button>
									<span className="text-[#817B94] text-[13px] font-bold" >
										React эхлэл
									</span>
								</div>
								<div className="w-[165px] h-[29px]">
								</div>
							</div>
							<div className="flex justify-between items-start self-stretch relative py-1 mb-[115px] ml-32 mr-[52px]">
								<div className="flex flex-col shrink-0 items-center relative">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/tdgdahew_expires_30_days.png"} 
										className="w-[1024px] h-10 object-fill"
									/>
									<div className="flex flex-col w-[124px] absolute top-[-31px] left-[-61px] pb-0.5 gap-[17px]">
										<div className="flex flex-col items-start self-stretch relative mx-[25px]">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/p7qcy50v_expires_30_days.png"} 
												className="self-stretch h-[68px] absolute top-[9px] right-0 left-0 object-fill"
											/>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/tnp5gz7o_expires_30_days.png"} 
												className="w-[74px] h-[68px] object-fill"
											/>
										</div>
										<div className="flex flex-col items-center self-stretch mx-[22px]">
											<span className="text-[#28233D] text-[13px] font-bold" >
												HTML суурь
											</span>
										</div>
									</div>
									<div className="flex flex-col w-[124px] absolute top-[9px] left-[101px] pb-0.5 px-[25px] gap-[17px]">
										<div className="flex flex-col items-start self-stretch relative">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/tp0lmm66_expires_30_days.png"} 
												className="self-stretch h-[68px] absolute top-[9px] right-0 left-0 object-fill"
											/>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/xnmpu7j4_expires_30_days.png"} 
												className="w-[74px] h-[68px] object-fill"
											/>
										</div>
										<div className="flex flex-col items-center self-stretch">
											<span className="text-[#28233D] text-[13px] font-bold" >
												CSS загвар
											</span>
										</div>
									</div>
									<div className="flex flex-col w-[124px] absolute top-[-31px] left-[263px] pb-0.5 gap-[17px]">
										<div className="flex flex-col items-start self-stretch relative mx-[25px]">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/9v071y2g_expires_30_days.png"} 
												className="self-stretch h-[68px] absolute top-[9px] right-0 left-0 object-fill"
											/>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/n7jrhn5q_expires_30_days.png"} 
												className="w-[74px] h-[68px] object-fill"
											/>
										</div>
										<div className="flex flex-col items-center self-stretch mx-7">
											<span className="text-[#28233D] text-[13px] font-bold" >
												JavaScript
											</span>
										</div>
									</div>
									<div className="flex flex-col w-[124px] absolute top-[9px] right-[261px] pb-0.5 gap-[17px]">
										<div className="flex flex-col items-start self-stretch relative mx-[25px]">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/8m7co3o9_expires_30_days.png"} 
												className="self-stretch h-[68px] absolute top-[9px] right-0 left-0 object-fill"
											/>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/36xv981m_expires_30_days.png"} 
												className="w-[74px] h-[68px] object-fill"
											/>
										</div>
										<div className="flex flex-col items-center self-stretch mx-[43px]">
											<span className="text-[#28233D] text-[13px] font-bold" >
												Props
											</span>
										</div>
									</div>
									<div className="flex flex-col w-[124px] absolute top-[-31px] right-[99px] pb-0.5 gap-[17px]">
										<div className="flex flex-col items-start self-stretch relative mx-[25px]">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/rsj3hvll_expires_30_days.png"} 
												className="self-stretch h-[68px] absolute top-[9px] right-0 left-0 object-fill"
											/>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/b0nf5jr4_expires_30_days.png"} 
												className="w-[74px] h-[68px] object-fill"
											/>
										</div>
										<div className="flex flex-col items-center self-stretch mx-[45px]">
											<span className="text-[#817B94] text-[13px] font-bold" >
												State
											</span>
										</div>
									</div>
									<div className="flex flex-col w-[124px] absolute top-[9px] right-[-63px] pb-0.5 gap-[17px]">
										<div className="flex flex-col items-start self-stretch relative mx-[25px]">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/oui7dhe6_expires_30_days.png"} 
												className="self-stretch h-[68px] absolute top-[9px] right-0 left-0 object-fill"
											/>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/yecyirxw_expires_30_days.png"} 
												className="w-[74px] h-[68px] object-fill"
											/>
										</div>
										<div className="flex flex-col items-center self-stretch mx-[33px]">
											<span className="text-[#817B94] text-[13px] font-bold" >
												Бататгал
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-col items-center w-[124px] absolute top-[-34px] left-[477px] pb-0.5 gap-1">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/s45waeiq_expires_30_days.png"} 
										className="w-[88px] h-[88px] object-fill"
									/>
									<div className="flex flex-col items-center self-stretch mx-[26px]">
										<span className="text-[#28233D] text-[13px] font-bold" >
											Компонент
										</span>
									</div>
								</div>
								<button className="flex flex-col shrink-0 items-start bg-[#5038B2] text-left absolute top-[-54px] left-[497px] py-[5px] px-2.5 rounded-lg border-0"
									onClick={()=>alert("Pressed!")}>
									<span className="text-white text-[11px] font-bold" >
										ЭНДЭЭС ЭХЭЛ
									</span>
								</button>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/fj47871a_expires_30_days.png"} 
									className="w-8 h-8 object-fill"
								/>
							</div>
						</div>
					</div>
					<div className="flex items-center self-stretch gap-5">
						<div className="flex flex-1 items-center bg-white py-[34px] px-6 gap-5 rounded-3xl border border-solid border-[#EAE6F3]">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/hr746bmr_expires_30_days.png"} 
								className="w-[72px] h-[72px] rounded-[20px] object-fill"
							/>
							<div className="flex flex-1 flex-col items-start gap-[5px]">
								<span className="text-[#7C5CFC] text-xs font-bold" >
									ДАРААГИЙН ХИЧЭЭЛ
								</span>
								<span className="text-[#28233D] text-[21px] font-bold" >
									React компонент
								</span>
								<span className="text-[#817B94] text-[13px]" >
									3 асуулт · 5 минут · +50 XP
								</span>
							</div>
							<button className="flex shrink-0 items-center bg-[#7C5CFC] text-left py-3.5 px-6 gap-[13px] rounded-2xl border-0"
								onClick={()=>alert("Pressed!")}>
								<span className="text-white text-base font-bold" >
									Эхлэх
								</span>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/ajifgxgt_expires_30_days.png"} 
									className="w-[18px] h-[18px] rounded-2xl object-fill"
								/>
							</button>
						</div>
						<div className="flex flex-col items-start bg-[#EEE9FF] w-[447px] pt-6 px-6 rounded-3xl">
							<div className="flex justify-between items-center self-stretch mb-3">
								<span className="text-[#28233D] text-base font-bold" >
									Өдрийн жижиг ялалт
								</span>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/ntg6bvqw_expires_30_days.png"} 
									className="w-5 h-5 object-fill"
								/>
							</div>
							<span className="text-[#817B94] text-[13px] mb-3" >
								Цувралаа 8 өдөр болгоход нэг хичээл үлдлээ.
							</span>
							<div className="flex items-center mb-[37px] gap-3">
								<div className="bg-[#EAE6F3] w-[270px] h-2 rounded-[100px]">
								</div>
								<span className="text-[#7C5CFC] text-xs font-bold" >
									0 / 50 XP
								</span>
							</div>
						</div>
					</div>
					<div className="flex justify-center items-center self-stretch gap-6">
						<div className="flex shrink-0 items-center gap-1.5">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/8u89p4x4_expires_30_days.png"} 
								className="w-3.5 h-3.5 object-fill"
							/>
							<span className="text-[#817B94] text-xs" >
								Дууссан
							</span>
						</div>
						<div className="flex shrink-0 items-center gap-1.5">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/r863vy7i_expires_30_days.png"} 
								className="w-3.5 h-3.5 object-fill"
							/>
							<span className="text-[#817B94] text-xs" >
								Одоогийн
							</span>
						</div>
						<div className="flex shrink-0 items-center gap-1.5">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/6m5t168q_expires_30_days.png"} 
								className="w-3.5 h-3.5 object-fill"
							/>
							<span className="text-[#817B94] text-xs" >
								Нээлттэй
							</span>
						</div>
						<div className="flex shrink-0 items-center gap-1.5">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/e14bd4ok_expires_30_days.png"} 
								className="w-3.5 h-3.5 object-fill"
							/>
							<span className="text-[#817B94] text-xs" >
								Түгжээтэй
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}