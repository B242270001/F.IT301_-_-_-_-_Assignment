import React from "react";
export default (props) => {
	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-[#F7F6FC] overflow-hidden">
				<div className="flex justify-between items-center self-stretch bg-white py-[23px] px-12">
					<div className="flex shrink-0 items-center gap-2.5">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/g9poqh0j_expires_30_days.png"} 
							className="w-9 h-9 rounded-xl object-fill"
						/>
						<span className="text-[#28233D] text-[22px] font-bold" >
							StudyQuest
						</span>
					</div>
					<div className="flex shrink-0 items-center">
						<div className="flex shrink-0 items-center py-2.5 px-3.5 mr-[17px] gap-2">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/mdxpvtv4_expires_30_days.png"} 
								className="w-[18px] h-[18px] object-fill"
							/>
							<span className="text-[#28233D] text-sm font-bold" >
								Өрөө рүү
							</span>
						</div>
						<button className="flex flex-col shrink-0 items-start bg-white text-left py-2.5 px-[18px] mr-2 rounded-[10px] border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-[#817B94] text-sm font-bold" >
								Дадлага
							</span>
						</button>
						<button className="flex flex-col shrink-0 items-start bg-white text-left py-2.5 px-[18px] mr-2 rounded-[10px] border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-[#817B94] text-sm font-bold" >
								Судлах
							</span>
						</button>
						<button className="flex flex-col shrink-0 items-start bg-[#EEE9FF] text-left py-2.5 px-[18px] rounded-[10px] border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-[#7C5CFC] text-sm font-bold" >
								Чансаа
							</span>
						</button>
					</div>
					<div className="flex shrink-0 items-center gap-5">
						<div className="flex shrink-0 items-center gap-1.5">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/qk6uzuoz_expires_30_days.png"} 
								className="w-5 h-5 object-fill"
							/>
							<span className="text-[#28233D] text-sm font-bold" >
								2,480 XP
							</span>
						</div>
						<div className="flex shrink-0 items-center gap-1.5">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/rdcgj6jv_expires_30_days.png"} 
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
				<div className="flex flex-col self-stretch py-[27px] px-16 gap-6">
					<div className="flex justify-between items-center self-stretch">
						<div className="flex flex-col shrink-0 items-start gap-1">
							<span className="text-[#28233D] text-[28px] font-bold" >
								Хамтдаа илүү хол хүрнэ
							</span>
							<span className="text-[#817B94] text-sm mr-[74px]" >
								Хичээл бүр ахиц. Ахиц бүр үнэ цэнтэй.
							</span>
						</div>
						<div className="flex shrink-0 items-center bg-[#EAE6F3] p-[5px] gap-1 rounded-[14px]">
							<button className="flex flex-col shrink-0 items-start bg-white text-left py-2.5 px-[22px] rounded-[10px] border-0"
								onClick={()=>alert("Pressed!")}>
								<span className="text-[#7C5CFC] text-sm font-bold" >
									Энэ долоо хоног
								</span>
							</button>
							<div className="flex flex-col shrink-0 items-start py-2.5 px-[22px]">
								<span className="text-[#817B94] text-sm" >
									Бүх цаг
								</span>
							</div>
						</div>
					</div>
					<div className="flex items-start self-stretch gap-7">
						<div className="flex-1 bg-white pb-[1px] rounded-3xl border border-solid border-[#EAE6F3]">
							<div className="flex justify-between items-start self-stretch pt-[22px] px-7">
								<button className="flex shrink-0 items-center bg-[#EEE9FF] text-left py-1.5 px-3 gap-1.5 rounded-[100px] border-0"
									onClick={()=>alert("Pressed!")}>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/4l8ru46y_expires_30_days.png"} 
										className="w-[15px] h-[15px] rounded-[100px] object-fill"
									/>
									<span className="text-[#7C5CFC] text-xs font-bold" >
										ИХ СУРГУУЛИЙН ЛИГ
									</span>
								</button>
								<span className="text-[#817B94] text-[13px]" >
									10-р сарын 5–11
								</span>
							</div>
							<div className="flex justify-center items-start self-stretch gap-2.5">
								<div className="flex flex-col items-center w-52 mt-[89px] gap-2.5">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/l8h4lgc9_expires_30_days.png"} 
										className="w-[68px] h-[68px] rounded-[100px] object-fill"
									/>
									<span className="text-[#28233D] text-base font-bold" >
										А. Саруул
									</span>
									<span className="text-[#7C5CFC] text-sm font-bold" >
										680 XP
									</span>
									<button className="flex flex-col items-center self-stretch bg-[#EEE8FA] text-left py-[5px] rounded-tl-[18px] rounded-tr-[18px] border border-solid border-white"
										onClick={()=>alert("Pressed!")}>
										<span className="text-[#A68DCC] text-[44px] font-bold" >
											2
										</span>
									</button>
								</div>
								<div className="flex flex-col items-center w-52 mt-[17px] gap-2.5">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/8d5avufm_expires_30_days.png"} 
										className="w-[30px] h-[30px] object-fill"
									/>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/hk7xyaz2_expires_30_days.png"} 
										className="w-[68px] h-[68px] rounded-[100px] object-fill"
									/>
									<span className="text-[#28233D] text-base font-bold" >
										Д. Анужин
									</span>
									<span className="text-[#7C5CFC] text-sm font-bold" >
										780 XP
									</span>
									<button className="flex flex-col items-center self-stretch bg-[#E2D8FF] text-left py-[21px] rounded-tl-[18px] rounded-tr-[18px] border border-solid border-white"
										onClick={()=>alert("Pressed!")}>
										<span className="text-[#7C5CFC] text-[44px] font-bold" >
											1
										</span>
									</button>
								</div>
								<div className="flex flex-col items-center w-52 mt-[107px] gap-2.5">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/zmrl1ecj_expires_30_days.png"} 
										className="w-[68px] h-[68px] rounded-[100px] object-fill"
									/>
									<span className="text-[#28233D] text-base font-bold" >
										Э. Билгүүн
									</span>
									<span className="text-[#7C5CFC] text-sm font-bold" >
										610 XP
									</span>
									<div className="flex flex-col items-center self-stretch bg-[#F2EAFE] rounded-tl-[18px] rounded-tr-[18px] border border-solid border-white">
										<span className="text-[#A68DCC] text-[44px] font-bold" >
											3
										</span>
									</div>
								</div>
							</div>
							<div className="flex justify-between items-center self-stretch bg-[#F7F6FC] py-3 px-7">
								<span className="text-[#817B94] text-[11px] font-bold" >
									БАЙР / ОЮУТАН
								</span>
								<span className="text-[#817B94] text-[11px] font-bold" >
									ДОЛОО ХОНОГИЙН XP
								</span>
							</div>
							<div className="flex items-center self-stretch bg-white py-[15px] px-7">
								<span className="text-[#817B94] text-[17px] font-bold mr-[35px]" >
									4
								</span>
								<button className="flex flex-col shrink-0 items-start bg-[#F7EADF] text-left py-2 px-[13px] mr-[18px] rounded-[100px] border-0"
									onClick={()=>alert("Pressed!")}>
									<span className="text-[#5038B2] text-sm font-bold" >
										Э
									</span>
								</button>
								<div className="flex flex-1 flex-col items-start mr-[18px] gap-[1px]">
									<span className="text-[#28233D] text-sm font-bold" >
										Б. Энхжин
									</span>
									<span className="text-[#817B94] text-[11px]" >
										Мэдээллийн систем · 2-р курс
									</span>
								</div>
								<span className="text-[#28233D] text-base font-bold" >
									520 XP
								</span>
							</div>
							<div className="flex items-center self-stretch bg-[#EEE9FF] py-[11px] px-7">
								<span className="text-[#7C5CFC] text-[17px] font-bold mr-[35px]" >
									5
								</span>
								<button className="flex flex-col shrink-0 items-start bg-[#EEE9FF] text-left py-2 px-3.5 mr-[18px] rounded-[100px] border-0"
									onClick={()=>alert("Pressed!")}>
									<span className="text-[#5038B2] text-sm font-bold" >
										Т
									</span>
								</button>
								<div className="flex flex-1 flex-col items-start mr-[18px] gap-[1px]">
									<div className="flex items-center gap-[11px]">
										<span className="text-[#28233D] text-sm font-bold" >
											Б. Тэмүүлэн
										</span>
										<button className="flex flex-col shrink-0 items-start bg-[#EEE9FF] text-left py-1.5 px-3 rounded-[100px] border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-[#7C5CFC] text-xs font-bold" >
												ЧИ
											</span>
										</button>
									</div>
									<span className="text-[#817B94] text-[11px]" >
										Программ хангамж · 2-р курс
									</span>
								</div>
								<span className="text-[#7C5CFC] text-base font-bold" >
									460 XP
								</span>
							</div>
							<div className="flex items-center self-stretch bg-white py-[15px] px-7">
								<span className="text-[#817B94] text-[17px] font-bold mr-[35px]" >
									6
								</span>
								<button className="flex flex-col shrink-0 items-start bg-[#E3F1EE] text-left py-2 px-[13px] mr-[18px] rounded-[100px] border-0"
									onClick={()=>alert("Pressed!")}>
									<span className="text-[#5038B2] text-sm font-bold" >
										Н
									</span>
								</button>
								<div className="flex flex-1 flex-col items-start mr-[18px] gap-[1px]">
									<span className="text-[#28233D] text-sm font-bold" >
										Г. Номин
									</span>
									<span className="text-[#817B94] text-[11px]" >
										Компьютерын ухаан · 2-р курс
									</span>
								</div>
								<span className="text-[#28233D] text-base font-bold" >
									410 XP
								</span>
							</div>
							<div className="flex items-center self-stretch bg-white py-[15px] px-7">
								<span className="text-[#817B94] text-[17px] font-bold mr-9" >
									7
								</span>
								<button className="flex flex-col shrink-0 items-start bg-[#E7EDFA] text-left py-2 px-3 mr-[18px] rounded-[100px] border-0"
									onClick={()=>alert("Pressed!")}>
									<span className="text-[#5038B2] text-sm font-bold" >
										М
									</span>
								</button>
								<div className="flex flex-1 flex-col items-start mr-[18px] gap-[1px]">
									<span className="text-[#28233D] text-sm font-bold" >
										Ц. Мөнх-Эрдэнэ
									</span>
									<span className="text-[#817B94] text-[11px]" >
										Мэдээллийн систем · 3-р курс
									</span>
								</div>
								<span className="text-[#28233D] text-base font-bold" >
									385 XP
								</span>
							</div>
						</div>
						<div className="flex flex-col w-[404px] gap-[22px]">
							<div className="flex flex-col items-start self-stretch bg-[#EEE9FF] py-7 pr-7 gap-[18px] rounded-3xl">
								<div className="flex justify-between items-center self-stretch ml-7">
									<span className="text-[#28233D] text-[17px] font-bold" >
										Чиний ахиц
									</span>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/1upd2oiq_expires_30_days.png"} 
										className="w-5 h-5 object-fill"
									/>
								</div>
								<div className="flex items-start ml-7 gap-[18px]">
									<span className="text-[#7C5CFC] text-[52px] font-bold" >
										5
									</span>
									<span className="text-[#5038B2] text-[15px] font-bold mt-10" >
										дугаар байр
									</span>
								</div>
								<span className="text-[#5038B2] text-sm ml-7" >
									Өнгөрсөн долоо хоногоос 3 байр урагшиллаа!
								</span>
								<div className="self-stretch bg-[#D8CCFC] h-[1px] ml-7">
								</div>
								<div className="flex justify-between items-center self-stretch ml-7">
									<span className="text-[#817B94] text-sm" >
										Энэ долоо хоног
									</span>
									<span className="text-[#28233D] text-base font-bold" >
										460 XP
									</span>
								</div>
								<div className="flex justify-between items-center self-stretch ml-7">
									<span className="text-[#817B94] text-sm" >
										Нийт цуглуулсан
									</span>
									<span className="text-[#28233D] text-base font-bold" >
										2,480 XP
									</span>
								</div>
							</div>
							<div className="flex flex-col items-start self-stretch bg-white py-7 gap-4 rounded-3xl border border-solid border-[#EAE6F3]">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/sj2m8yrm_expires_30_days.png"} 
									className="w-[34px] h-[34px] ml-7 rounded-3xl object-fill"
								/>
								<span className="text-[#28233D] text-xl font-bold ml-7" >
									Дараагийн байр ойрхон!
								</span>
								<span className="text-[#817B94] text-sm ml-7" >
									60 XP цуглуулбал 4-р байрт хүрнэ. Нэг хичээлээс эхлээрэй.
								</span>
								<button className="flex items-center bg-[#EEE9FF] text-left py-1.5 px-3 ml-7 gap-1.5 rounded-[100px] border-0"
									onClick={()=>alert("Pressed!")}>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/zaqy7cim_expires_30_days.png"} 
										className="w-[15px] h-[15px] rounded-[100px] object-fill"
									/>
									<span className="text-[#7C5CFC] text-xs font-bold" >
										Дуусахад 1 өдөр 15 цаг
									</span>
								</button>
								<span className="text-[#7C5CFC] text-[13px] font-bold ml-7" >
									Дадлага хийх →
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}