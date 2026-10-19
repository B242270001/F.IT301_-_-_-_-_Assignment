import React from "react";
export default (props) => {
	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-[#F7F6FC] overflow-hidden">
				<div className="flex justify-between items-center self-stretch bg-white py-4 px-6">
					<div className="flex shrink-0 items-center gap-2.5">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/9jt20w1z_expires_30_days.png"} 
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
						<button className="flex flex-col shrink-0 items-start bg-[#EEE9FF] text-left py-[13px] px-3.5 rounded-[10px] border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-[#7C5CFC] text-sm font-bold" >
								Дадлага
							</span>
						</button>
						<button className="flex flex-col shrink-0 items-start bg-white text-left py-[13px] px-3.5 rounded-[10px] border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-[#817B94] text-sm font-bold" >
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
					<span className="text-[#28233D] text-[28px] font-bold ml-12" >
						Мэдлэгээ нэг алхмаар ахиул
					</span>
					<span className="text-[#817B94] text-sm ml-12" >
						Хичээлээ сонгоод, суралцах замаа үргэлжлүүлээрэй.
					</span>
					<button className="flex flex-col items-start bg-[#EEE9FF] text-left py-1.5 px-3 ml-12 rounded-[100px] border-0"
						onClick={()=>alert("Pressed!")}>
						<span className="text-[#7C5CFC] text-xs font-bold" >
							Өнөөдрийн зорилго: 50 XP
						</span>
					</button>
					<div className="flex items-center self-stretch ml-12 gap-5">
						<div className="flex flex-1 flex-col items-start bg-[#EEE9FF] py-[22px] pr-[22px] gap-3.5 rounded-3xl border-2 border-solid border-[#7C5CFC]">
							<div className="flex justify-between items-center self-stretch ml-[22px]">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/hjah5jyc_expires_30_days.png"} 
									className="w-11 h-11 rounded-xl object-fill"
								/>
								<span className="text-[#817B94] text-xs" >
									5 / 12 сэдэв
								</span>
							</div>
							<span className="text-[#28233D] text-[19px] font-bold ml-[22px]" >
								Веб систем ба технологи
							</span>
							<div className="flex items-center self-stretch ml-[22px] gap-4">
								<div className="flex-1 items-start bg-[#EAE6F3] rounded-[100px]">
									<div className="bg-[#7C5CFC] w-[146px] h-2 rounded-[100px]">
									</div>
								</div>
								<span className="text-[#7C5CFC] text-[13px] font-bold" >
									42%
								</span>
							</div>
							<span className="text-[#817B94] text-xs ml-[22px]" >
								Сүүлд үзсэн: React компонент
							</span>
							<span className="text-[#817B94] text-[13px] ml-[22px]" >
								3 / 7 хичээл дууссан
							</span>
							<button className="flex flex-col items-center self-stretch bg-[#7C5CFC] text-left py-[15px] ml-[22px] rounded-2xl border-0"
								onClick={()=>alert("Pressed!")}>
								<span className="text-white text-[15px] font-bold" >
									Эхлэх
								</span>
							</button>
						</div>
						<div className="flex flex-1 flex-col items-start bg-white py-[22px] pr-[22px] gap-3.5 rounded-3xl border border-solid border-[#EAE6F3]">
							<div className="flex justify-between items-center self-stretch ml-[22px]">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/5t61nqaq_expires_30_days.png"} 
									className="w-11 h-11 rounded-xl object-fill"
								/>
								<span className="text-[#817B94] text-xs" >
									2 / 11 сэдэв
								</span>
							</div>
							<span className="text-[#28233D] text-[19px] font-bold ml-[22px]" >
								Өгөгдлийн бүтэц
							</span>
							<div className="flex items-center self-stretch ml-[22px] gap-4">
								<div className="flex-1 items-start bg-[#EAE6F3] rounded-[100px]">
									<div className="bg-[#7C5CFC] w-[62px] h-2 rounded-[100px]">
									</div>
								</div>
								<span className="text-[#7C5CFC] text-[13px] font-bold" >
									18%
								</span>
							</div>
							<span className="text-[#817B94] text-xs ml-[22px]" >
								Өөрийн хурдаар суралцаарай
							</span>
							<span className="text-[#817B94] text-[13px] ml-[22px]" >
								Хичээлээ сонгоод эхлээрэй.
							</span>
							<button className="flex flex-col items-center self-stretch bg-white text-left py-[15px] ml-[22px] rounded-2xl border border-solid border-[#EAE6F3]"
								onClick={()=>alert("Pressed!")}>
								<span className="text-[#28233D] text-[15px] font-bold" >
									Эхлэх
								</span>
							</button>
						</div>
						<div className="flex flex-1 flex-col items-start bg-white py-[22px] pr-[22px] gap-3.5 rounded-3xl border border-solid border-[#EAE6F3]">
							<div className="flex justify-between items-center self-stretch ml-[22px]">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/qmj0b2tm_expires_30_days.png"} 
									className="w-11 h-11 rounded-xl object-fill"
								/>
								<span className="text-[#817B94] text-xs" >
									1 / 12 сэдэв
								</span>
							</div>
							<span className="text-[#28233D] text-[19px] font-bold ml-[22px]" >
								Математик II
							</span>
							<div className="flex items-center self-stretch ml-[22px] gap-4">
								<div className="flex-1 items-start bg-[#EAE6F3] rounded-[100px]">
									<div className="bg-[#7C5CFC] w-7 h-2 rounded-[100px]">
									</div>
								</div>
								<span className="text-[#7C5CFC] text-[13px] font-bold" >
									8%
								</span>
							</div>
							<span className="text-[#817B94] text-xs ml-[22px]" >
								Өөрийн хурдаар суралцаарай
							</span>
							<span className="text-[#817B94] text-[13px] ml-[22px]" >
								Хичээлээ сонгоод эхлээрэй.
							</span>
							<button className="flex flex-col items-center self-stretch bg-white text-left py-[15px] ml-[22px] rounded-2xl border border-solid border-[#EAE6F3]"
								onClick={()=>alert("Pressed!")}>
								<span className="text-[#28233D] text-[15px] font-bold" >
									Эхлэх
								</span>
							</button>
						</div>
					</div>
					<div className="flex items-start self-stretch ml-12 gap-5">
						<div className="flex flex-1 flex-col items-start bg-white py-5 pr-5 gap-4 rounded-3xl border border-solid border-[#EAE6F3]">
							<button className="flex flex-col items-start bg-[#EEE9FF] text-left py-1.5 px-3 ml-5 rounded-[100px] border-0"
								onClick={()=>alert("Pressed!")}>
								<span className="text-[#7C5CFC] text-xs font-bold" >
									СОНГОСОН ХИЧЭЭЛ
								</span>
							</button>
							<span className="text-[#28233D] text-[22px] font-bold ml-5" >
								Веб систем ба технологи
							</span>
							<span className="text-[#817B94] text-sm ml-5" >
								2-р бүлэг · Интерактив веб бүтээх
							</span>
							<span className="text-[#7C5CFC] text-sm font-bold ml-5" >
								3 / 7 хичээл дууссан
							</span>
							<span className="text-[#28233D] text-sm font-bold ml-5" >
								Дараагийн хичээл: React компонент
							</span>
							<span className="text-[#817B94] text-sm ml-5" >
								3 асуулт · 5 минут · +50 XP
							</span>
							<button className="flex flex-col items-center self-stretch bg-[#7C5CFC] text-left py-[15px] ml-5 rounded-2xl border-0"
								onClick={()=>alert("Pressed!")}>
								<span className="text-white text-[15px] font-bold" >
									Эхлэх
								</span>
							</button>
							<span className="text-[#817B94] text-xs ml-5" >
								Суралцах зам · React эхлэл
							</span>
						</div>
						<div className="flex flex-1 flex-col items-start bg-[#EEE9FF] py-5 pr-5 gap-4 rounded-3xl border border-solid border-[#EAE6F3]">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/q96w1cc3_expires_30_days.png"} 
								className="w-5 h-5 ml-5 rounded-3xl object-fill"
							/>
							<span className="text-[#28233D] text-xl font-bold ml-5" >
								Өдрийн жижиг ялалт
							</span>
							<span className="text-[#817B94] text-sm ml-5" >
								Цувралаа 8 өдөр болгоход нэг хичээл үлдлээ.
							</span>
							<div className="self-stretch bg-[#EAE6F3] h-2 ml-5 rounded-[100px]">
							</div>
							<span className="text-[#7C5CFC] text-sm ml-5" >
								0 / 50 XP
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}