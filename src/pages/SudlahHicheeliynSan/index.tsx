import React from "react";
export default (props) => {
	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-[#F7F6FC] overflow-hidden">
				<div className="flex justify-between items-center self-stretch bg-white py-[23px] px-12">
					<div className="flex shrink-0 items-center gap-2.5">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/nlcoqqg1_expires_30_days.png"} 
							className="w-9 h-9 rounded-xl object-fill"
						/>
						<span className="text-[#28233D] text-[22px] font-bold" >
							StudyQuest
						</span>
					</div>
					<div className="flex shrink-0 items-center">
						<div className="flex shrink-0 items-center py-2.5 px-3.5 mr-[17px] gap-2">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/5rws21js_expires_30_days.png"} 
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
						<button className="flex flex-col shrink-0 items-start bg-[#EEE9FF] text-left py-2.5 px-[18px] mr-2 rounded-[10px] border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-[#7C5CFC] text-sm font-bold" >
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
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/9utu11vl_expires_30_days.png"} 
								className="w-5 h-5 object-fill"
							/>
							<span className="text-[#28233D] text-sm font-bold" >
								2,480 XP
							</span>
						</div>
						<div className="flex shrink-0 items-center gap-1.5">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/bk6w1jku_expires_30_days.png"} 
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
				<div className="self-stretch pt-7 px-12">
					<div className="flex justify-between items-center self-stretch mb-6">
						<div className="flex flex-col shrink-0 items-start gap-1">
							<span className="text-[#28233D] text-[28px] font-bold" >
								Сониуч зангаас мэдлэг эхэлнэ
							</span>
							<span className="text-[#817B94] text-sm mr-[109px]" >
								Лекцээ унш. Жишээг турш. Ойлголтоо бататга.
							</span>
						</div>
						<div className="flex shrink-0 items-center bg-white py-[13px] px-3.5 gap-2.5 rounded-[14px] border border-solid border-[#EAE6F3]">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/5a3wikj7_expires_30_days.png"} 
								className="w-[18px] h-[18px] rounded-[14px] object-fill"
							/>
							<span className="text-[#817B94] text-sm" >
								Хичээл, сэдэв хайх...
							</span>
						</div>
					</div>
					<div className="flex items-center self-stretch mb-6">
						<div className="flex flex-1 flex-col items-start bg-[#EEE9FF] py-[21px] pr-[22px] mr-5 gap-3.5 rounded-3xl border border-solid border-[#C8BBFE]">
							<div className="flex justify-between items-center self-stretch ml-[22px]">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/6sc73rna_expires_30_days.png"} 
									className="w-11 h-11 rounded-xl object-fill"
								/>
								<span className="text-[#817B94] text-xs" >
									5 / 12 сэдэв
								</span>
							</div>
							<span className="text-[#28233D] text-[19px] font-bold ml-[22px]" >
								Веб систем ба технологи
							</span>
							<div className="flex justify-between items-center self-stretch ml-[22px]">
								<div className="shrink-0 items-start bg-[#EAE6F3] pr-[169px] rounded-[100px]">
									<div className="bg-[#7C5CFC] w-[121px] h-2 rounded-[100px]">
									</div>
								</div>
								<span className="text-[#7C5CFC] text-[13px] font-bold" >
									42%
								</span>
							</div>
							<span className="text-[#817B94] text-xs ml-[22px]" >
								Сүүлд үзсэн: React компонент
							</span>
						</div>
						<div className="flex flex-1 flex-col items-start bg-white py-[21px] pr-[22px] mr-[21px] gap-3.5 rounded-3xl border border-solid border-[#EAE6F3]">
							<div className="flex justify-between items-center self-stretch ml-[22px]">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/6naq2unm_expires_30_days.png"} 
									className="w-11 h-11 rounded-xl object-fill"
								/>
								<span className="text-[#817B94] text-xs" >
									2 / 11 сэдэв
								</span>
							</div>
							<span className="text-[#28233D] text-[19px] font-bold ml-[22px]" >
								Өгөгдлийн бүтэц
							</span>
							<div className="flex justify-between items-center self-stretch ml-[22px]">
								<div className="shrink-0 items-start bg-[#EAE6F3] pr-[238px] rounded-[100px]">
									<div className="bg-[#7C5CFC] w-[52px] h-2 rounded-[100px]">
									</div>
								</div>
								<span className="text-[#7C5CFC] text-[13px] font-bold" >
									18%
								</span>
							</div>
							<span className="text-[#817B94] text-xs ml-[22px]" >
								Өөрийн хурдаар суралцаарай
							</span>
						</div>
						<div className="flex flex-1 flex-col items-start bg-white py-[21px] pr-[22px] gap-3.5 rounded-3xl border border-solid border-[#EAE6F3]">
							<div className="flex justify-between items-center self-stretch ml-[22px]">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/tmeukimz_expires_30_days.png"} 
									className="w-11 h-11 rounded-xl object-fill"
								/>
								<span className="text-[#817B94] text-xs" >
									1 / 12 сэдэв
								</span>
							</div>
							<span className="text-[#28233D] text-[19px] font-bold ml-[22px]" >
								Математик II
							</span>
							<div className="flex justify-between items-center self-stretch ml-[22px]">
								<div className="shrink-0 items-start bg-[#EAE6F3] pr-[267px] rounded-[100px]">
									<div className="bg-[#7C5CFC] w-[23px] h-2 rounded-[100px]">
									</div>
								</div>
								<span className="text-[#7C5CFC] text-[13px] font-bold" >
									8%
								</span>
							</div>
							<span className="text-[#817B94] text-xs ml-[22px]" >
								Өөрийн хурдаар суралцаарай
							</span>
						</div>
					</div>
					<div className="flex items-center self-stretch mb-6 gap-6">
						<div className="flex flex-col items-start bg-white w-[366px] pt-[22px] px-[22px] rounded-3xl border border-solid border-[#EAE6F3]">
							<span className="text-[#28233D] text-lg font-bold mb-2" >
								2-р бүлэг · React эхлэл
							</span>
							<span className="text-[#817B94] text-[13px] mb-2" >
								4 сэдэв · 35 минут
							</span>
							<div className="self-stretch bg-[#EAE6F3] h-[1px] mb-2">
							</div>
							<div className="flex items-center self-stretch bg-white p-2.5 mb-2 gap-3 rounded-xl">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/oef1khi5_expires_30_days.png"} 
									className="w-8 h-8 rounded-[10px] object-fill"
								/>
								<div className="flex flex-1 flex-col items-start gap-0.5">
									<span className="text-[#28233D] text-sm font-bold" >
										React гэж юу вэ?
									</span>
									<span className="text-[#817B94] text-xs" >
										Уншсан · 6 минут
									</span>
								</div>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/jwt9wqeq_expires_30_days.png"} 
									className="w-4 h-4 rounded-xl object-fill"
								/>
							</div>
							<div className="flex items-center self-stretch bg-white p-2.5 mb-2 gap-3 rounded-xl">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/mxyjsnpy_expires_30_days.png"} 
									className="w-8 h-8 rounded-[10px] object-fill"
								/>
								<div className="flex flex-1 flex-col items-start gap-0.5">
									<span className="text-[#28233D] text-sm font-bold" >
										JSX бичиглэл
									</span>
									<span className="text-[#817B94] text-xs" >
										Уншсан · 8 минут
									</span>
								</div>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/kgcnfj9y_expires_30_days.png"} 
									className="w-4 h-4 rounded-xl object-fill"
								/>
							</div>
							<div className="flex items-center self-stretch bg-[#EEE9FF] p-2.5 mb-2 gap-3 rounded-xl">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/4766ltyo_expires_30_days.png"} 
									className="w-8 h-8 rounded-[10px] object-fill"
								/>
								<div className="flex flex-1 flex-col items-start gap-0.5">
									<span className="text-[#28233D] text-sm font-bold" >
										React компонент
									</span>
									<span className="text-[#817B94] text-xs" >
										Үргэлжлүүлэх · 10 минут
									</span>
								</div>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/q8ml6qxx_expires_30_days.png"} 
									className="w-4 h-4 rounded-xl object-fill"
								/>
							</div>
							<div className="flex items-center self-stretch bg-white p-2.5 mb-2 gap-3 rounded-xl">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/zgpjvuuf_expires_30_days.png"} 
									className="w-8 h-8 rounded-[10px] object-fill"
								/>
								<div className="flex flex-1 flex-col items-start gap-0.5">
									<span className="text-[#28233D] text-sm font-bold" >
										Props ба өгөгдөл
									</span>
									<span className="text-[#817B94] text-xs" >
										Дараагийн сэдэв · 11 минут
									</span>
								</div>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/is35j9gv_expires_30_days.png"} 
									className="w-4 h-4 rounded-xl object-fill"
								/>
							</div>
							<div className="flex justify-between items-center self-stretch mb-2">
								<span className="text-[#817B94] text-xs" >
									Бүлгийн ахиц
								</span>
								<span className="text-[#7C5CFC] text-xs font-bold" >
									2 / 4
								</span>
							</div>
							<div className="items-start self-stretch bg-[#EAE6F3] mb-[33px] rounded-[100px]">
								<div className="bg-[#7C5CFC] w-[161px] h-2 rounded-[100px]">
								</div>
							</div>
						</div>
						<div className="flex-1 bg-white pt-7 px-7 rounded-3xl border border-solid border-[#EAE6F3]">
							<div className="flex justify-between items-center self-stretch mb-5">
								<button className="flex shrink-0 items-center bg-[#EEE9FF] text-left py-1.5 px-3 gap-1.5 rounded-[100px] border-0"
									onClick={()=>alert("Pressed!")}>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/x43nbbxs_expires_30_days.png"} 
										className="w-[15px] h-[15px] rounded-[100px] object-fill"
									/>
									<span className="text-[#7C5CFC] text-xs font-bold" >
										ҮРГЭЛЖЛҮҮЛЭН УНШИХ
									</span>
								</button>
								<span className="text-[#817B94] text-[13px]" >
									10 минут · +20 XP
								</span>
							</div>
							<div className="flex items-start self-stretch mb-5 gap-7">
								<div className="flex flex-1 flex-col items-start gap-3.5">
									<span className="text-[#28233D] text-[28px] font-bold" >
										React компонент
									</span>
									<span className="text-[#817B94] text-[15px]" >
										Компонент бол дахин ашиглаж болох интерфэйсийн нэг хэсэг. Жижиг хэсгүүдийг нийлүүлж том апп бүтээнэ.
									</span>
									<div className="flex flex-col w-[245px] gap-2">
										<div className="flex items-center self-stretch gap-2">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/hblrqbzb_expires_30_days.png"} 
												className="w-4 h-4 object-fill"
											/>
											<span className="text-[#28233D] text-[13px]" >
												Компонентын модыг ойлгох
											</span>
										</div>
										<div className="flex items-center self-stretch gap-2">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/yjzwsgtc_expires_30_days.png"} 
												className="w-4 h-4 object-fill"
											/>
											<span className="text-[#28233D] text-[13px]" >
												Функцээр компонент тодорхойлох
											</span>
										</div>
										<div className="flex items-center self-stretch gap-2">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/37gse8co_expires_30_days.png"} 
												className="w-4 h-4 object-fill"
											/>
											<span className="text-[#28233D] text-[13px]" >
												Дэлгэцэд дүрслэх алхмыг харах
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-1 flex-col items-center bg-[#F7F6FC] pt-[18px] rounded-2xl">
									<span className="text-[#817B94] text-xs font-bold mb-3.5" >
										КОМПОНЕНТЫН МОД
									</span>
									<button className="flex flex-col items-start bg-[#7C5CFC] text-left py-[11px] px-10 mb-3.5 rounded-xl border-0"
										onClick={()=>alert("Pressed!")}>
										<span className="text-white text-[15px] font-bold" >
											App
										</span>
									</button>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/bpk2l8my_expires_30_days.png"} 
										className="w-8 h-8 mb-3.5 rounded-2xl object-fill"
									/>
									<div className="flex items-center mb-[29px] gap-3">
										<button className="flex flex-col shrink-0 items-start bg-white text-left py-2.5 px-[29px] rounded-[10px] border border-solid border-[#CBBFFA]"
											onClick={()=>alert("Pressed!")}>
											<span className="text-[#5038B2] text-[13px] font-bold" >
												Header
											</span>
										</button>
										<button className="flex flex-col shrink-0 items-start bg-white text-left py-2.5 px-[27px] rounded-[10px] border border-solid border-[#CBBFFA]"
											onClick={()=>alert("Pressed!")}>
											<span className="text-[#5038B2] text-[13px] font-bold" >
												Content
											</span>
										</button>
									</div>
								</div>
							</div>
							<div className="flex justify-between items-center self-stretch mb-[55px]">
								<span className="text-[#817B94] text-[13px]" >
									Диаграмм · Кодын жишээ · Алхамчилсан тайлбар
								</span>
								<button className="flex shrink-0 items-center bg-[#7C5CFC] text-left py-3.5 px-6 gap-3 rounded-2xl border-0"
									onClick={()=>alert("Pressed!")}>
									<span className="text-white text-base font-bold" >
										Лекцээ нээх
									</span>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/etax1dr1_expires_30_days.png"} 
										className="w-[18px] h-[18px] rounded-2xl object-fill"
									/>
								</button>
							</div>
						</div>
					</div>
					<div className="flex justify-between items-center self-stretch mb-3">
						<span className="text-[#817B94] text-xs" >
							Суралцах хурд хүн бүрд өөр. Өөрийн хурдаар урагшил.
						</span>
						<span className="text-[#7C5CFC] text-xs font-bold" >
							Дадлагаар бататгах →
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}