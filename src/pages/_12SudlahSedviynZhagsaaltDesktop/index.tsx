import React from "react";
export default (props) => {
	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-[#F7F6FC] overflow-hidden">
				<div className="flex justify-between items-center self-stretch bg-white py-4 px-6">
					<div className="flex shrink-0 items-center gap-2.5">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/w6fmywdb_expires_30_days.png"} 
							className="w-9 h-9 rounded-xl object-fill"
						/>
						<span className="text-[#28233D] text-xl font-bold" >
							StudyQuest
						</span>
					</div>
					<div className="flex shrink-0 items-center gap-1">
						<button className="flex flex-col shrink-0 items-start bg-white text-left py-[13px] px-3.5 rounded-[10px] border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-[#817B94] text-sm font-bold" >
								Өрөө рүү
							</span>
						</button>
						<button className="flex flex-col shrink-0 items-start bg-white text-left py-[13px] px-3.5 rounded-[10px] border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-[#817B94] text-sm font-bold" >
								Дадлага
							</span>
						</button>
						<button className="flex flex-col shrink-0 items-start bg-[#EEE9FF] text-left py-[13px] px-3.5 rounded-[10px] border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-[#7C5CFC] text-sm font-bold" >
								Судлах
							</span>
						</button>
						<button className="flex flex-col shrink-0 items-start bg-white text-left py-[13px] px-3.5 rounded-[10px] border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-[#817B94] text-sm font-bold" >
								Чансаа
							</span>
						</button>
					</div>
					<div className="flex shrink-0 items-center">
						<span className="text-[#28233D] text-[13px] font-bold mr-3" >
							2,480 XP   ·   7 өдөр
						</span>
						<button className="flex flex-col shrink-0 items-start bg-[#EEE9FF] text-left py-2.5 px-[13px] mr-2.5 rounded-[100px] border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-[#5038B2] text-xs font-bold" >
								Т
							</span>
						</button>
						<span className="text-[#28233D] text-xs font-bold" >
							Тэмүүлэн
						</span>
					</div>
				</div>
				<div className="flex flex-col items-start self-stretch py-12 pr-12 gap-6">
					<button className="flex flex-col items-center self-stretch bg-white text-left py-[15px] ml-12 rounded-2xl border border-solid border-[#EAE6F3]"
						onClick={()=>alert("Pressed!")}>
						<span className="text-[#28233D] text-[15px] font-bold" >
							← Хичээлийн сан руу буцах
						</span>
					</button>
					<span className="text-[#28233D] text-[28px] font-bold ml-12" >
						Веб систем ба технологи
					</span>
					<span className="text-[#817B94] text-sm ml-12" >
						Сэдвээ сонгоод, мэдлэгийн аяллаа үргэлжлүүлээрэй.
					</span>
					<div className="flex flex-col items-start self-stretch bg-white py-5 pr-5 ml-12 gap-4 rounded-3xl border border-solid border-[#EAE6F3]">
						<div className="flex justify-between items-center self-stretch ml-5">
							<button className="flex flex-col shrink-0 items-start bg-[#EEE9FF] text-left py-1.5 px-3 rounded-[100px] border-0"
								onClick={()=>alert("Pressed!")}>
								<span className="text-[#7C5CFC] text-xs font-bold" >
									ХИЧЭЭЛИЙН АХИЦ
								</span>
							</button>
							<button className="flex flex-col shrink-0 items-start bg-[#EEE9FF] text-left py-1.5 px-3 rounded-[100px] border-0"
								onClick={()=>alert("Pressed!")}>
								<span className="text-[#7C5CFC] text-xs font-bold" >
									42%
								</span>
							</button>
						</div>
						<span className="text-[#7C5CFC] text-sm ml-5" >
							5 / 12 сэдэв
						</span>
						<div className="items-start self-stretch bg-[#EAE6F3] ml-5 rounded-[100px]">
							<div className="bg-[#7C5CFC] w-[547px] h-2 rounded-[100px]">
							</div>
						</div>
					</div>
					<div className="flex items-start self-stretch ml-12 gap-6">
						<div className="flex flex-col items-start bg-white w-[560px] p-5 gap-4 rounded-3xl border border-solid border-[#EAE6F3]">
							<span className="text-[#28233D] text-lg font-bold" >
								2-р бүлэг · React эхлэл
							</span>
							<span className="text-[#817B94] text-[13px]" >
								4 сэдэв · 35 минут
							</span>
							<div className="flex items-center self-stretch bg-white p-3 gap-3 rounded-xl">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/rwxi4pnz_expires_30_days.png"} 
									className="w-5 h-5 rounded-xl object-fill"
								/>
								<div className="flex flex-1 flex-col items-start gap-[3px]">
									<span className="text-[#28233D] text-sm font-bold" >
										React гэж юу вэ?
									</span>
									<span className="text-[#817B94] text-xs" >
										Уншсан · 6 минут
									</span>
								</div>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/pdlrskdf_expires_30_days.png"} 
									className="w-4 h-4 rounded-xl object-fill"
								/>
							</div>
							<div className="flex items-center self-stretch bg-white p-3 gap-3 rounded-xl">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/s7pvxzy3_expires_30_days.png"} 
									className="w-5 h-5 rounded-xl object-fill"
								/>
								<div className="flex flex-1 flex-col items-start gap-[3px]">
									<span className="text-[#28233D] text-sm font-bold" >
										JSX бичиглэл
									</span>
									<span className="text-[#817B94] text-xs" >
										Уншсан · 8 минут
									</span>
								</div>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/a65sbzla_expires_30_days.png"} 
									className="w-4 h-4 rounded-xl object-fill"
								/>
							</div>
							<div className="flex items-center self-stretch bg-[#EEE9FF] p-3 gap-3 rounded-xl">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/rozxgtzz_expires_30_days.png"} 
									className="w-5 h-5 rounded-xl object-fill"
								/>
								<div className="flex flex-1 flex-col items-start gap-[3px]">
									<span className="text-[#28233D] text-sm font-bold" >
										React компонент
									</span>
									<span className="text-[#817B94] text-xs" >
										Үргэлжлүүлэх · 10 минут
									</span>
								</div>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/btayjyw8_expires_30_days.png"} 
									className="w-4 h-4 rounded-xl object-fill"
								/>
							</div>
							<div className="flex items-center self-stretch bg-white p-3 gap-3 rounded-xl">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/1leqtj7c_expires_30_days.png"} 
									className="w-5 h-5 rounded-xl object-fill"
								/>
								<div className="flex flex-1 flex-col items-start gap-[3px]">
									<span className="text-[#28233D] text-sm font-bold" >
										Props ба өгөгдөл
									</span>
									<span className="text-[#817B94] text-xs" >
										Дараагийн сэдэв · 11 минут
									</span>
								</div>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/bha33160_expires_30_days.png"} 
									className="w-4 h-4 rounded-xl object-fill"
								/>
							</div>
							<span className="text-[#7C5CFC] text-[13px]" >
								Бүлгийн ахиц · 2 / 4
							</span>
							<div className="items-start self-stretch bg-[#EAE6F3] rounded-[100px]">
								<div className="bg-[#7C5CFC] w-[260px] h-2 rounded-[100px]">
								</div>
							</div>
						</div>
						<div className="flex flex-1 flex-col items-start bg-white py-5 pr-5 gap-4 rounded-3xl border border-solid border-[#EAE6F3]">
							<button className="flex flex-col items-start bg-[#EEE9FF] text-left py-1.5 px-3 ml-5 rounded-[100px] border-0"
								onClick={()=>alert("Pressed!")}>
								<span className="text-[#7C5CFC] text-xs font-bold" >
									ҮРГЭЛЖЛҮҮЛЭН УНШИХ
								</span>
							</button>
							<span className="text-[#28233D] text-[26px] font-bold ml-5" >
								React компонент
							</span>
							<span className="text-[#817B94] text-sm w-[688px] ml-5" >
								Компонент бол дахин ашиглаж болох интерфэйсийн нэг хэсэг. Жижиг хэсгүүдийг нийлүүлж том апп бүтээнэ.
							</span>
							<span className="text-[#7C5CFC] text-sm ml-5" >
								10 минут · +20 XP
							</span>
							<div className="flex flex-col items-center self-stretch bg-[#F7F6FC] py-4 ml-5 gap-3 rounded-2xl">
								<span className="text-[#817B94] text-[11px] font-bold" >
									КОМПОНЕНТЫН МОД
								</span>
								<button className="flex flex-col items-start bg-[#7C5CFC] text-left py-2.5 px-[37px] rounded-[10px] border-0"
									onClick={()=>alert("Pressed!")}>
									<span className="text-white text-xs font-bold" >
										App
									</span>
								</button>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/g0zfwmt2_expires_30_days.png"} 
									className="w-[202px] h-5 rounded-2xl object-fill"
								/>
								<div className="flex items-center gap-3">
									<button className="flex flex-col shrink-0 items-start bg-white text-left py-2.5 px-[29px] rounded-lg border border-solid border-[#CBBFFA]"
										onClick={()=>alert("Pressed!")}>
										<span className="text-[#5038B2] text-xs font-bold" >
											Header
										</span>
									</button>
									<button className="flex flex-col shrink-0 items-start bg-white text-left py-2.5 px-[27px] rounded-lg border border-solid border-[#CBBFFA]"
										onClick={()=>alert("Pressed!")}>
										<span className="text-[#5038B2] text-xs font-bold" >
											Content
										</span>
									</button>
								</div>
							</div>
							<button className="flex flex-col items-center self-stretch bg-[#7C5CFC] text-left py-[15px] ml-5 rounded-2xl border-0"
								onClick={()=>alert("Pressed!")}>
								<span className="text-white text-[15px] font-bold" >
									Үргэлжлүүлэх · Дэлгэрэнгүй →
								</span>
							</button>
							<span className="text-[#817B94] text-xs ml-5" >
								Диаграмм · Кодын жишээ · Алхамчилсан тайлбар
							</span>
						</div>
					</div>
					<span className="text-[#817B94] text-sm ml-12" >
						Суралцах хурд хүн бүрд өөр. Өөрийн хурдаар урагшил.
					</span>
				</div>
			</div>
		</div>
	)
}