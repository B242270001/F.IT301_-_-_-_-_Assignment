import React from "react";
export default (props) => {
	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-[#F7F6FC] pb-[3px] overflow-hidden">
				<div className="flex justify-between items-center self-stretch bg-white py-[23px] px-12">
					<div className="flex shrink-0 items-center gap-2.5">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/6eqavi57_expires_30_days.png"} 
							className="w-9 h-9 rounded-xl object-fill"
						/>
						<span className="text-[#28233D] text-[22px] font-bold" >
							StudyQuest
						</span>
					</div>
					<div className="flex shrink-0 items-center">
						<div className="flex shrink-0 items-center py-2.5 px-3.5 mr-[17px] gap-2">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/dh5gl8ok_expires_30_days.png"} 
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
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/2oesy59j_expires_30_days.png"} 
								className="w-5 h-5 object-fill"
							/>
							<span className="text-[#28233D] text-sm font-bold" >
								2,530 XP
							</span>
						</div>
						<div className="flex shrink-0 items-center gap-1.5">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/cvsojt6p_expires_30_days.png"} 
								className="w-5 h-5 object-fill"
							/>
							<span className="text-[#28233D] text-sm font-bold" >
								8 өдөр
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
				<div className="flex flex-col items-center self-stretch py-[30px] gap-5">
					<button className="flex items-center bg-[#E7F6EF] text-left py-1.5 px-3 gap-1.5 rounded-[100px] border-0"
						onClick={()=>alert("Pressed!")}>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/pch6k750_expires_30_days.png"} 
							className="w-[15px] h-[15px] rounded-[100px] object-fill"
						/>
						<span className="text-[#278467] text-xs font-bold" >
							ХИЧЭЭЛ ДУУСЛАА
						</span>
					</button>
					<div className="flex flex-col items-center self-stretch mx-40 gap-1.5">
						<span className="text-[#28233D] text-[34px] font-bold" >
							Нэг алхам урагшиллаа!
						</span>
						<span className="text-[#817B94] text-[15px]" >
							React компонент · Веб систем ба технологи
						</span>
					</div>
					<div className="flex items-center self-stretch bg-white p-7 mx-40 gap-8 rounded-3xl border border-solid border-[#EAE6F3]">
						<div className="w-60 pt-2.5 px-2.5">
							<div className="self-stretch mb-[33px]">
								<div className="flex flex-col items-end self-stretch">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/10hj7rnh_expires_30_days.png"} 
										className="w-2.5 h-2.5 mr-10 object-fill"
									/>
								</div>
								<div className="flex flex-col items-start self-stretch relative">
									<div className="items-start self-stretch bg-cover bg-center pt-[33px]">
										<div className="flex flex-col items-end self-stretch mb-[98px]">
											<div className="bg-[#7C5CFC] w-3.5 h-[19px] mr-[13px] rounded-[3px]">
											</div>
										</div>
										<div className="bg-[#EDAA42] w-[13px] h-[17px] mb-[52px] ml-0.5 rounded-[3px]">
										</div>
									</div>
									<div className="self-stretch bg-cover bg-center absolute top-7 right-[18px] left-[18px] pt-[31px]">
										<div className="flex flex-col items-end self-stretch mb-[5px]">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/qdy7n17b_expires_30_days.png"} 
												className="w-[26px] h-[26px] mr-[19px] object-fill"
											/>
										</div>
										<div className="flex flex-col items-center self-stretch mb-[9px]">
											<div className="flex items-center gap-6">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/3nis2dwx_expires_30_days.png"} 
													className="w-1 h-[5px] object-fill"
												/>
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/33abbkp0_expires_30_days.png"} 
													className="w-1 h-[5px] object-fill"
												/>
											</div>
										</div>
										<div className="flex flex-col items-center self-stretch mb-[47px]">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/5vngdu86_expires_30_days.png"} 
												className="w-[21px] h-2 object-fill"
											/>
										</div>
										<div className="flex flex-col items-center self-stretch mb-[73px]">
											<div className="bg-[#9277FD] w-7 h-[15px] rounded-[5px]">
											</div>
										</div>
									</div>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/8yd5i64m_expires_30_days.png"} 
										className="w-5 h-5 absolute top-2.5 left-[-5px] object-fill"
									/>
								</div>
							</div>
						</div>
						<div className="flex flex-1 flex-col items-start gap-5">
							<div className="flex items-center self-stretch">
								<div className="flex flex-1 flex-col items-center bg-[#EEE9FF] py-[22px] mr-3.5 gap-2.5 rounded-[18px]">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/nqhi0t0f_expires_30_days.png"} 
										className="w-6 h-6 rounded-[18px] object-fill"
									/>
									<span className="text-[#7C5CFC] text-[28px] font-bold" >
										+50
									</span>
									<span className="text-[#7C5CFC] text-[13px] font-bold" >
										Цуглуулсан XP
									</span>
								</div>
								<div className="flex flex-1 flex-col items-center bg-[#E7F6EF] py-[22px] mr-[15px] gap-2.5 rounded-[18px]">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/ap699vro_expires_30_days.png"} 
										className="w-6 h-6 rounded-[18px] object-fill"
									/>
									<span className="text-[#278467] text-[28px] font-bold" >
										2 / 3
									</span>
									<span className="text-[#278467] text-[13px] font-bold" >
										Зөв хариулт
									</span>
								</div>
								<div className="flex flex-1 flex-col items-center bg-[#FFF2DA] py-[22px] gap-2.5 rounded-[18px]">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/tpk8znxz_expires_30_days.png"} 
										className="w-6 h-6 rounded-[18px] object-fill"
									/>
									<span className="text-[#A66B1D] text-[28px] font-bold" >
										04:12
									</span>
									<span className="text-[#A66B1D] text-[13px] font-bold" >
										Зарцуулсан хугацаа
									</span>
								</div>
							</div>
							<div className="flex items-center self-stretch bg-[#F7F6FC] p-4 gap-3 rounded-2xl">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/t9fnlmxu_expires_30_days.png"} 
									className="w-7 h-7 rounded-2xl object-fill"
								/>
								<div className="flex flex-1 flex-col items-start gap-0.5">
									<span className="text-[#28233D] text-base font-bold" >
										8 өдрийн цуврал!
									</span>
									<span className="text-[#817B94] text-[13px]" >
										Өнөөдрийн 50 XP зорилго биеллээ.
									</span>
								</div>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/h0obf3tq_expires_30_days.png"} 
									className="w-5 h-5 rounded-2xl object-fill"
								/>
							</div>
							<span className="text-[#817B94] text-[13px]" >
								Нийт XP: 2,480 → 2,530 · Долоо хоногийн XP: 510
							</span>
						</div>
					</div>
					<div className="flex items-start self-stretch mx-40 gap-5">
						<div className="flex flex-1 flex-col items-start bg-white py-[22px] gap-2.5 rounded-3xl border border-solid border-[#EAE6F3]">
							<div className="flex items-center ml-[22px] gap-2">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/9znwcwuh_expires_30_days.png"} 
									className="w-5 h-5 object-fill"
								/>
								<span className="text-[#28233D] text-[17px] font-bold" >
									Нэг ойлголтоо бататгая
								</span>
							</div>
							<span className="text-[#817B94] text-sm w-[476px] ml-[22px]" >
								Массивын length шинж элементийн тоог буцаадаг. Кодын үр дүнгийн асуултаа дахин хараарай.
							</span>
							<span className="text-[#7C5CFC] text-[13px] font-bold ml-[22px]" >
								Тайлбарыг дахин унших →
							</span>
						</div>
						<div className="flex flex-1 flex-col items-start bg-[#EEE9FF] py-[22px] gap-2.5 rounded-3xl">
							<button className="flex items-center bg-[#EEE9FF] text-left py-1.5 px-3 ml-[22px] gap-1.5 rounded-[100px] border-0"
								onClick={()=>alert("Pressed!")}>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/7n0hujmj_expires_30_days.png"} 
									className="w-[15px] h-[15px] rounded-[100px] object-fill"
								/>
								<span className="text-[#7C5CFC] text-xs font-bold" >
									ШИНЭ ХИЧЭЭЛ НЭЭГДЛЭЭ
								</span>
							</button>
							<span className="text-[#28233D] text-[21px] font-bold ml-[22px]" >
								Props: өгөгдөл дамжуулах
							</span>
							<span className="text-[#817B94] text-sm ml-[22px]" >
								Компонентуудаа өгөгдлөөр холбож сурцгаая.
							</span>
							<span className="text-[#7C5CFC] text-[13px] font-bold ml-[22px]" >
								2-р нэгж · Дараагийн алхам
							</span>
						</div>
					</div>
					<div className="flex items-center gap-4">
						<button className="flex shrink-0 items-center bg-white text-left py-3.5 px-6 gap-3 rounded-2xl border border-solid border-[#EAE6F3]"
							onClick={()=>alert("Pressed!")}>
							<span className="text-[#28233D] text-base font-bold" >
								Өрөө рүү буцах
							</span>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/ytjm2y5j_expires_30_days.png"} 
								className="w-[18px] h-[18px] rounded-2xl object-fill"
							/>
						</button>
						<button className="flex shrink-0 items-center bg-[#7C5CFC] text-left py-3.5 px-6 gap-3 rounded-2xl border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-white text-base font-bold" >
								Суралцах зам руу
							</span>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/gqov2qwd_expires_30_days.png"} 
								className="w-[18px] h-[18px] rounded-2xl object-fill"
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}