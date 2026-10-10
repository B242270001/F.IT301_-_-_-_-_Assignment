import React, {useState} from "react";
export default (props) => {
	const [input1, onChangeInput1] = useState('');
	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-[#F7F6FC] pb-[91px] overflow-hidden">
				<div className="flex justify-between items-center self-stretch bg-white py-[23px] px-12">
					<div className="flex shrink-0 items-center gap-2.5">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/md5xhwty_expires_30_days.png"} 
							className="w-9 h-9 rounded-xl object-fill"
						/>
						<span className="text-[#28233D] text-[22px] font-bold" >
							StudyQuest
						</span>
					</div>
					<div className="flex shrink-0 items-center">
						<div className="flex shrink-0 items-center py-2.5 px-3.5 mr-[17px] gap-2">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/yj9ifzaw_expires_30_days.png"} 
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
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/by3vs4n2_expires_30_days.png"} 
								className="w-5 h-5 object-fill"
							/>
							<span className="text-[#28233D] text-sm font-bold" >
								2,480 XP
							</span>
						</div>
						<div className="flex shrink-0 items-center gap-1.5">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/dhzn3q94_expires_30_days.png"} 
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
				<div className="flex flex-col self-stretch py-6 px-36 gap-6">
					<div className="flex items-center self-stretch">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/5pt5zq46_expires_30_days.png"} 
							className="w-5 h-5 mr-5 object-fill"
						/>
						<div className="flex-1 bg-[#7C5CFC] h-2 mr-5 rounded-[100px]">
						</div>
						<span className="text-[#817B94] text-sm font-bold mr-[23px]" >
							3 / 3 асуулт
						</span>
						<button className="flex shrink-0 items-center bg-[#EEE9FF] text-left py-1.5 px-3 gap-1.5 rounded-[100px] border-0"
							onClick={()=>alert("Pressed!")}>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/617b7dv5_expires_30_days.png"} 
								className="w-[15px] h-[15px] rounded-[100px] object-fill"
							/>
							<span className="text-[#7C5CFC] text-xs font-bold" >
								+50 XP
							</span>
						</button>
					</div>
					<div className="flex items-center self-stretch">
						<span className="text-[#817B94] text-xs mr-[11px]" >
							Веб систем ба технологи
						</span>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/dq12celq_expires_30_days.png"} 
							className="w-3.5 h-3.5 mr-2 object-fill"
						/>
						<span className="text-[#7C5CFC] text-xs font-bold" >
							React компонент
						</span>
					</div>
					<div className="flex items-center self-stretch gap-9">
						<div className="flex flex-col w-[236px] gap-5">
							<div className="flex flex-col items-center self-stretch bg-[#EEE9FF] py-[17px] gap-1.5 rounded-[20px]">
								<span className="text-[#5038B2] text-base font-bold text-center mx-[22px]" >
									Алдаа бол суралцах нэг хэсэг.
								</span>
								<span className="text-[#817B94] text-[13px]" >
									Кодыг мөр мөрөөр нь харъя.
								</span>
							</div>
							<div className="self-stretch bg-cover bg-center pt-[31px] mx-7">
								<div className="flex flex-col items-end self-stretch mb-[5px]">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/oq22typm_expires_30_days.png"} 
										className="w-[26px] h-[26px] mr-[19px] object-fill"
									/>
								</div>
								<div className="flex flex-col items-center self-stretch mb-[9px]">
									<div className="flex items-center gap-6">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/2laafjp8_expires_30_days.png"} 
											className="w-1 h-[5px] object-fill"
										/>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/o21ioxy9_expires_30_days.png"} 
											className="w-1 h-[5px] object-fill"
										/>
									</div>
								</div>
								<div className="flex flex-col items-center self-stretch mb-[51px]">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/xz04rjgz_expires_30_days.png"} 
										className="w-[21px] h-1 object-fill"
									/>
								</div>
								<div className="flex flex-col items-center self-stretch mb-[73px]">
									<div className="bg-[#9277FD] w-7 h-[15px] rounded-[5px]">
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-1 flex-col items-start bg-white py-7 pr-7 gap-[18px] rounded-3xl border border-solid border-[#EAE6F3]">
							<div className="flex justify-between items-start self-stretch ml-7">
								<button className="flex flex-col shrink-0 items-start bg-[#EEE9FF] text-left py-1.5 px-3 rounded-[100px] border-0"
									onClick={()=>alert("Pressed!")}>
									<span className="text-[#7C5CFC] text-xs font-bold" >
										КОДЫН ҮР ДҮН
									</span>
								</button>
								<span className="text-[#817B94] text-xs" >
									3-р асуулт
								</span>
							</div>
							<span className="text-[#28233D] text-2xl font-bold ml-7" >
								Энэ компонент дэлгэцэд ямар тоо харуулах вэ?
							</span>
							<div className="flex flex-col items-start self-stretch bg-[#29253E] py-5 ml-7 gap-2.5 rounded-[14px]">
								<span className="text-[#B7A8ED] text-[11px] ml-5" >
									JSX
								</span>
								<span className="text-[#E4DBFF] text-[15px] w-[365px] ml-5" >
									function Content() &#123;\n  const items = [&quot;HTML&quot;, &quot;CSS&quot;, &quot;React&quot;];\n  return &lt;p&gt;&#123;items.length&#125;&lt;/p&gt;;\n&#125;
								</span>
							</div>
							<div className="flex items-center self-stretch ml-7 gap-3">
								<div className="flex flex-1 items-center bg-[#FFF0F2] py-3.5 px-4 rounded-2xl border-2 border-solid border-[#CB6375]">
									<button className="flex flex-col shrink-0 items-start bg-white text-left py-[5px] px-2.5 mr-3.5 rounded-lg border border-solid border-[#CB6375]"
										onClick={()=>alert("Pressed!")}>
										<span className="text-[#CB6375] text-[13px] font-bold" >
											A
										</span>
									</button>
									<span className="text-[#CB6375] text-[15px] font-bold" >
										2
									</span>
									<div className="flex-1 self-stretch">
									</div>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/nt9pyvmw_expires_30_days.png"} 
										className="w-[21px] h-[21px] rounded-2xl object-fill"
									/>
								</div>
								<div className="flex flex-1 items-center bg-[#E7F6EF] py-3.5 px-4 rounded-2xl border-2 border-solid border-[#278467]">
									<button className="flex flex-col shrink-0 items-start bg-white text-left py-[5px] px-2.5 mr-3.5 rounded-lg border border-solid border-[#278467]"
										onClick={()=>alert("Pressed!")}>
										<span className="text-[#278467] text-[13px] font-bold" >
											B
										</span>
									</button>
									<span className="text-[#278467] text-[15px] font-bold" >
										3
									</span>
									<div className="flex-1 self-stretch">
									</div>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/g1h05065_expires_30_days.png"} 
										className="w-[21px] h-[21px] rounded-2xl object-fill"
									/>
								</div>
								<div className="flex flex-1 items-center bg-white rounded-2xl border border-solid border-[#EAE6F3]">
									<div className="flex flex-col shrink-0 items-start bg-white py-[5px] px-2.5 ml-4 mr-3.5 rounded-lg border border-solid border-[#EAE6F3]">
										<span className="text-[#28233D] text-[13px] font-bold" >
											C
										</span>
									</div>
									<input
										placeholder="4"
										value={input1}
										onChange={(event)=>onChangeInput1(event.target.value)}
										className="flex-1 self-stretch text-[#28233D] bg-transparent text-[15px] py-[18px] mr-1 border-0"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="flex items-center self-stretch bg-[#FFF0F2] py-8 px-6 gap-6 rounded-3xl">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/yvkiiq52_expires_30_days.png"} 
							className="w-11 h-11 rounded-[100px] object-fill"
						/>
						<div className="flex flex-1 flex-col items-start gap-[5px]">
							<span className="text-[#CB6375] text-lg font-bold" >
								Зөв хариулт: 3
							</span>
							<span className="text-[#28233D] text-sm" >
								items массив 3 элементтэй. length нь элементийн тоог буцааж, JSX доторх &#123; &#125; үүнийг дэлгэцэд харуулна.
							</span>
						</div>
						<button className="flex shrink-0 items-center bg-[#7C5CFC] text-left py-3.5 px-6 gap-3 rounded-2xl border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-white text-base font-bold" >
								Үр дүн харах
							</span>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/jmdb5ggv_expires_30_days.png"} 
								className="w-[18px] h-[18px] rounded-2xl object-fill"
							/>
						</button>
					</div>
					<div className="flex justify-between items-center self-stretch">
						<span className="text-[#817B94] text-xs" >
							2-р бүлэг · 2-р нэгж · Компонент
						</span>
						<span className="text-[#7C5CFC] text-xs font-bold" >
							Суралцах зам руу буцах
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}