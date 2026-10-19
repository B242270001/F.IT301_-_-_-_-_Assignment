import React, {useState} from "react";
export default (props) => {
	const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
	const [input3, onChangeInput3] = useState('');
	const [input4, onChangeInput4] = useState('');
	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-[#F7F6FC] pb-1 overflow-hidden">
				<div className="flex justify-between items-center self-stretch bg-white py-[23px] px-12">
					<div className="flex shrink-0 items-center gap-2.5">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/cd4bjolp_expires_30_days.png"} 
							className="w-9 h-9 rounded-xl object-fill"
						/>
						<span className="text-[#28233D] text-[22px] font-bold" >
							StudyQuest
						</span>
					</div>
					<div className="flex shrink-0 items-center">
						<div className="flex shrink-0 items-center py-2.5 px-3.5 mr-[17px] gap-2">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/3pa9ghgk_expires_30_days.png"} 
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
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/e2jp0dn8_expires_30_days.png"} 
								className="w-5 h-5 object-fill"
							/>
							<span className="text-[#28233D] text-sm font-bold" >
								2,480 XP
							</span>
						</div>
						<div className="flex shrink-0 items-center gap-1.5">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/1veegt4q_expires_30_days.png"} 
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
				<div className="flex items-center self-stretch py-6 px-10 gap-6">
					<div className="flex flex-col items-start bg-white w-[258px] pt-5 px-5 rounded-3xl border border-solid border-[#EAE6F3]">
						<div className="flex items-center mb-[18px] gap-2">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/xier9d7w_expires_30_days.png"} 
								className="w-[17px] h-[17px] object-fill"
							/>
							<span className="text-[#7C5CFC] text-[13px] font-bold" >
								Хичээлийн сан
							</span>
						</div>
						<div className="self-stretch bg-[#EAE6F3] h-[1px] mb-[18px]">
						</div>
						<span className="text-[#28233D] text-lg font-bold w-32 mb-[18px]" >
							Веб систем ба технологи
						</span>
						<span className="text-[#817B94] text-xs mb-[18px]" >
							2-р бүлэг · React эхлэл
						</span>
						<div className="items-start self-stretch bg-[#EAE6F3] mb-[18px] rounded-[100px]">
							<div className="bg-[#7C5CFC] w-[109px] h-2 rounded-[100px]">
							</div>
						</div>
						<span className="text-[#7C5CFC] text-xs font-bold mb-[18px]" >
							2 / 4 сэдэв дууссан
						</span>
						<div className="flex items-center self-stretch bg-white mb-[18px] rounded-xl">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/epcea7e3_expires_30_days.png"} 
								className="w-[18px] h-[18px] ml-3 mr-2.5 rounded-xl object-fill"
							/>
							<input
								placeholder="React гэж юу вэ?"
								value={input1}
								onChange={(event)=>onChangeInput1(event.target.value)}
								className="flex-1 self-stretch text-[#28233D] bg-transparent text-[13px] py-3 mr-1 border-0"
							/>
						</div>
						<div className="flex items-center self-stretch bg-white mb-[18px] rounded-xl">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/u402t56g_expires_30_days.png"} 
								className="w-[18px] h-[18px] ml-3 mr-2.5 rounded-xl object-fill"
							/>
							<input
								placeholder="JSX бичиглэл"
								value={input2}
								onChange={(event)=>onChangeInput2(event.target.value)}
								className="flex-1 self-stretch text-[#28233D] bg-transparent text-[13px] py-3 mr-1 border-0"
							/>
						</div>
						<div className="flex items-center self-stretch bg-[#EEE9FF] mb-[18px] rounded-xl">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/iqoslqa2_expires_30_days.png"} 
								className="w-[18px] h-[18px] ml-3 mr-2.5 rounded-xl object-fill"
							/>
							<input
								placeholder="React компонент"
								value={input3}
								onChange={(event)=>onChangeInput3(event.target.value)}
								className="flex-1 self-stretch text-[#7C5CFC] bg-transparent text-[13px] font-bold py-3 mr-1 border-0"
							/>
						</div>
						<div className="flex items-center self-stretch bg-white mb-[18px] rounded-xl">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/tut8q6a6_expires_30_days.png"} 
								className="w-[18px] h-[18px] ml-3 mr-2.5 rounded-xl object-fill"
							/>
							<input
								placeholder="Props ба өгөгдөл"
								value={input4}
								onChange={(event)=>onChangeInput4(event.target.value)}
								className="flex-1 self-stretch text-[#28233D] bg-transparent text-[13px] py-3 mr-1 border-0"
							/>
						</div>
						<div className="flex flex-col items-start self-stretch bg-[#FFF2DA] py-4 mb-[174px] gap-2.5 rounded-2xl">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/9k3o65v0_expires_30_days.png"} 
								className="w-5 h-5 ml-4 rounded-2xl object-fill"
							/>
							<span className="text-[#28233D] text-[13px] font-bold w-[158px] ml-4" >
								Ойлгосноо өөрийн үгээр тайлбарлаад үзээрэй.
							</span>
						</div>
					</div>
					<div className="flex flex-1 flex-col items-start bg-white pt-7 pr-7 rounded-3xl border border-solid border-[#EAE6F3]">
						<div className="flex justify-between items-center self-stretch mb-[18px] ml-7">
							<div className="flex flex-col shrink-0 items-start gap-1">
								<span className="text-[#7C5CFC] text-[11px] font-bold mr-28" >
									3-Р СЭДЭВ · 10 МИНУТ
								</span>
								<span className="text-[#28233D] text-[28px] font-bold" >
									React компонент
								</span>
							</div>
							<button className="flex shrink-0 items-center bg-[#EEE9FF] text-left py-1.5 px-3 gap-1.5 rounded-[100px] border-0"
								onClick={()=>alert("Pressed!")}>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/fh4d1hx7_expires_30_days.png"} 
									className="w-[15px] h-[15px] rounded-[100px] object-fill"
								/>
								<span className="text-[#7C5CFC] text-xs font-bold" >
									Уншиж байна
								</span>
							</button>
						</div>
						<span className="text-[#817B94] text-sm mb-[18px] ml-7" >
							Компонент нь интерфэйсийн бие даасан, дахин ашиглаж болох хэсэг юм. App нь Header ба Content-ийг нэгтгэж дэлгэц бүтээнэ.
						</span>
						<div className="flex items-center self-stretch mb-[18px] ml-7 gap-5">
							<div className="flex flex-1 flex-col items-start bg-[#29253E] pt-5 pr-5 rounded-2xl">
								<div className="flex justify-between items-center self-stretch mb-2.5 ml-5">
									<span className="text-[#B8ABE2] text-[11px]" >
										App.jsx
									</span>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/zddvljiz_expires_30_days.png"} 
										className="w-4 h-4 object-fill"
									/>
								</div>
								<span className="text-[#BB9BFF] text-[13px] w-[277px] mb-[63px] ml-5" >
									function Header() &#123;\n  return &lt;h1&gt;Миний хичээл&lt;/h1&gt;;\n&#125;\nfunction Content() &#123;\n  return &lt;p&gt;React сурцгаая!&lt;/p&gt;;\n&#125;\nfunction App() &#123;\n  return &lt;&gt;&lt;Header /&gt;&lt;Content /&gt;&lt;/&gt;;\n&#125;
								</span>
							</div>
							<div className="flex flex-1 flex-col gap-3.5">
								<div className="flex flex-col items-center self-stretch bg-[#F7F6FC] py-3.5 gap-2 rounded-2xl">
									<span className="text-[#817B94] text-[10px] font-bold" >
										КОМПОНЕНТЫН МОД
									</span>
									<button className="flex flex-col items-start bg-[#7C5CFC] text-left py-1.5 px-9 rounded-[9px] border-0"
										onClick={()=>alert("Pressed!")}>
										<span className="text-white text-[13px] font-bold" >
											App
										</span>
									</button>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/dgadho2t_expires_30_days.png"} 
										className="w-[202px] h-5 rounded-2xl object-fill"
									/>
									<div className="flex items-center gap-3">
										<button className="flex flex-col shrink-0 items-start bg-white text-left py-1.5 px-[29px] rounded-lg border border-solid border-[#CBBFFA]"
											onClick={()=>alert("Pressed!")}>
											<span className="text-[#5038B2] text-xs font-bold" >
												Header
											</span>
										</button>
										<button className="flex flex-col shrink-0 items-start bg-white text-left py-1.5 px-[27px] rounded-lg border border-solid border-[#CBBFFA]"
											onClick={()=>alert("Pressed!")}>
											<span className="text-[#5038B2] text-xs font-bold" >
												Content
											</span>
										</button>
									</div>
								</div>
								<div className="self-stretch bg-white pb-[26px] rounded-2xl border border-solid border-[#EAE6F3]">
									<div className="flex items-center self-stretch bg-[#F7F6FC] py-1.5">
										<div className="bg-[#DEB9CB] w-1.5 h-1.5 ml-3 mr-[5px] rounded">
										</div>
										<div className="bg-[#E5D295] w-1.5 h-1.5 mr-[5px] rounded">
										</div>
										<div className="bg-[#BFD6BE] w-1.5 h-1.5 mr-[5px] rounded">
										</div>
										<span className="text-[#817B94] text-[10px]" >
											Дэлгэцэд харагдах нь
										</span>
									</div>
									<div className="flex flex-col items-start self-stretch py-3.5 pl-3.5 gap-[5px]">
										<span className="text-[#28233D] text-[19px] font-bold" >
											Миний хичээл
										</span>
										<span className="text-[#817B94] text-[13px]" >
											React сурцгаая!
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className="flex justify-between items-center self-stretch mb-[18px] ml-7">
							<button className="flex shrink-0 items-center bg-[#EEE9FF] text-left py-2.5 px-3.5 rounded-[10px] border-0"
								onClick={()=>alert("Pressed!")}>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/q6lpw9gx_expires_30_days.png"} 
									className="w-4 h-4 mr-2 rounded-[10px] object-fill"
								/>
								<span className="text-[#7C5CFC] text-[13px] font-bold mr-2.5" >
									Дүрслэх алхмуудыг харах
								</span>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/457hwp94_expires_30_days.png"} 
									className="w-4 h-4 rounded-[10px] object-fill"
								/>
							</button>
							<span className="text-[#817B94] text-[11px]" >
								Алхмууд дэлгэгдсэн
							</span>
						</div>
						<div className="flex items-start self-stretch bg-[#F7F6FC] p-[18px] mb-[18px] ml-7 gap-5 rounded-2xl">
							<div className="flex flex-1 items-start gap-2.5">
								<button className="flex flex-col shrink-0 items-start bg-[#7C5CFC] text-left py-[5px] px-[11px] rounded-[10px] border-0"
									onClick={()=>alert("Pressed!")}>
									<span className="text-white text-xs font-bold" >
										1
									</span>
								</button>
								<div className="flex flex-1 flex-col items-start gap-1">
									<span className="text-[#28233D] text-sm font-bold" >
										App дуудагдана
									</span>
									<span className="text-[#817B94] text-xs w-[260px]" >
										React үндсэн App функцийг ажиллуулж JSX-ийг уншина.
									</span>
								</div>
							</div>
							<div className="flex flex-1 items-start gap-2.5">
								<button className="flex flex-col shrink-0 items-start bg-[#7C5CFC] text-left py-[5px] px-2.5 rounded-[10px] border-0"
									onClick={()=>alert("Pressed!")}>
									<span className="text-white text-xs font-bold" >
										2
									</span>
								</button>
								<div className="flex flex-1 flex-col items-start gap-1">
									<span className="text-[#28233D] text-sm font-bold" >
										Хүүхэд хэсгүүд үүснэ
									</span>
									<span className="text-[#817B94] text-xs w-[249px]" >
										Header ба Content тус бүр өөрийн JSX-ийг буцаана.
									</span>
								</div>
							</div>
							<div className="flex flex-1 items-start gap-2.5">
								<button className="flex flex-col shrink-0 items-start bg-[#7C5CFC] text-left py-[5px] px-2.5 rounded-[10px] border-0"
									onClick={()=>alert("Pressed!")}>
									<span className="text-white text-xs font-bold" >
										3
									</span>
								</button>
								<div className="flex flex-1 flex-col items-start gap-1">
									<span className="text-[#28233D] text-sm font-bold" >
										Дэлгэц шинэчлэгдэнэ
									</span>
									<span className="text-[#817B94] text-xs" >
										React эдгээр хэсгийг DOM-д нэгтгэн харуулна.
									</span>
								</div>
							</div>
						</div>
						<div className="flex justify-between items-center self-stretch mb-[78px] ml-7">
							<div className="flex flex-col shrink-0 items-center gap-1">
								<span className="text-[#28233D] text-[13px] font-bold" >
									Дараагийн сэдэв: Props ба өгөгдөл
								</span>
								<span className="text-[#817B94] text-xs" >
									Дуусгаснаар бүлгийн ахиц 3 / 4 болно.
								</span>
							</div>
							<button className="flex shrink-0 items-center bg-[#7C5CFC] text-left py-3.5 px-6 gap-[13px] rounded-2xl border-0"
								onClick={()=>alert("Pressed!")}>
								<span className="text-white text-base font-bold" >
									Сэдвийг дуусгах · +20 XP
								</span>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/b7p66v3f_expires_30_days.png"} 
									className="w-[18px] h-[18px] rounded-2xl object-fill"
								/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}