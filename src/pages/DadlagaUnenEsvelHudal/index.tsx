import React, {useState} from "react";
export default (props) => {
	const [input1, onChangeInput1] = useState('');
	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-[#F7F6FC] pb-[161px] overflow-hidden">
				<div className="flex justify-between items-center self-stretch bg-white py-[23px] px-12">
					<div className="flex shrink-0 items-center gap-2.5">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/24juuynh_expires_30_days.png"} 
							className="w-9 h-9 rounded-xl object-fill"
						/>
						<span className="text-[#28233D] text-[22px] font-bold" >
							StudyQuest
						</span>
					</div>
					<div className="flex shrink-0 items-center">
						<div className="flex shrink-0 items-center py-2.5 px-3.5 mr-[17px] gap-2">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/hv4rkyzf_expires_30_days.png"} 
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
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/xwcxzxjw_expires_30_days.png"} 
								className="w-5 h-5 object-fill"
							/>
							<span className="text-[#28233D] text-sm font-bold" >
								2,480 XP
							</span>
						</div>
						<div className="flex shrink-0 items-center gap-1.5">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/5m2zv6kk_expires_30_days.png"} 
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
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/skow7xdg_expires_30_days.png"} 
							className="w-5 h-5 mr-5 object-fill"
						/>
						<div className="flex-1 items-start bg-[#EAE6F3] mr-5 rounded-[100px]">
							<div className="bg-[#7C5CFC] w-[600px] h-2 rounded-[100px]">
							</div>
						</div>
						<span className="text-[#817B94] text-sm font-bold mr-[22px]" >
							2 / 3 асуулт
						</span>
						<button className="flex shrink-0 items-center bg-[#EEE9FF] text-left py-1.5 px-3 gap-1.5 rounded-[100px] border-0"
							onClick={()=>alert("Pressed!")}>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/afbnsf0h_expires_30_days.png"} 
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
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/gy1t2xa7_expires_30_days.png"} 
							className="w-3.5 h-3.5 mr-2 object-fill"
						/>
						<span className="text-[#7C5CFC] text-xs font-bold" >
							React компонент
						</span>
					</div>
					<div className="flex items-center self-stretch gap-9">
						<div className="flex flex-col w-[236px] gap-5">
							<div className="flex flex-col items-center self-stretch bg-[#EEE9FF] py-[18px] gap-1.5 rounded-[20px]">
								<span className="text-[#5038B2] text-base font-bold" >
									Зөв ойлгожээ!
								</span>
								<span className="text-[#817B94] text-[13px]" >
									Чи үүнийг чадна.
								</span>
							</div>
							<div className="self-stretch bg-cover bg-center pt-[31px] mx-7">
								<div className="flex flex-col items-end self-stretch mb-[5px]">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/rl7amarx_expires_30_days.png"} 
										className="w-[26px] h-[26px] mr-[19px] object-fill"
									/>
								</div>
								<div className="flex flex-col items-center self-stretch mb-[9px]">
									<div className="flex items-center gap-6">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/yuw939gh_expires_30_days.png"} 
											className="w-1 h-[5px] object-fill"
										/>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/wbbl1zyf_expires_30_days.png"} 
											className="w-1 h-[5px] object-fill"
										/>
									</div>
								</div>
								<div className="flex flex-col items-center self-stretch mb-12">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/n1n3sm0d_expires_30_days.png"} 
										className="w-[21px] h-2 object-fill"
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
										ҮНЭН / ХУДАЛ
									</span>
								</button>
								<span className="text-[#817B94] text-xs" >
									2-р асуулт
								</span>
							</div>
							<span className="text-[#28233D] text-2xl font-bold ml-7" >
								React компонентын нэр жижиг үсгээр эхлэх ёстой.
							</span>
							<span className="text-[#817B94] text-sm ml-7" >
								Өгүүлбэрийг үнэн эсвэл худал гэж үнэлээрэй.
							</span>
							<div className="flex items-center self-stretch bg-white ml-7 rounded-2xl border border-solid border-[#EAE6F3]">
								<div className="flex flex-col shrink-0 items-start bg-white py-[5px] px-2.5 ml-4 mr-3.5 rounded-lg border border-solid border-[#EAE6F3]">
									<span className="text-[#28233D] text-[13px] font-bold" >
										A
									</span>
								</div>
								<input
									placeholder="Үнэн"
									value={input1}
									onChange={(event)=>onChangeInput1(event.target.value)}
									className="flex-1 self-stretch text-[#28233D] bg-transparent text-[15px] py-[18px] mr-1 border-0"
								/>
							</div>
							<div className="flex items-center self-stretch bg-[#E7F6EF] py-3.5 px-4 ml-7 rounded-2xl border-2 border-solid border-[#278467]">
								<button className="flex flex-col shrink-0 items-start bg-white text-left py-[5px] px-2.5 mr-3.5 rounded-lg border border-solid border-[#278467]"
									onClick={()=>alert("Pressed!")}>
									<span className="text-[#278467] text-[13px] font-bold" >
										B
									</span>
								</button>
								<span className="text-[#278467] text-[15px] font-bold" >
									Худал
								</span>
								<div className="flex-1 self-stretch">
								</div>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/nvy6dz9r_expires_30_days.png"} 
									className="w-[21px] h-[21px] rounded-2xl object-fill"
								/>
							</div>
						</div>
					</div>
					<div className="flex items-center self-stretch bg-[#E7F6EF] py-8 px-6 gap-6 rounded-3xl">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/rwmnuo44_expires_30_days.png"} 
							className="w-11 h-11 rounded-[100px] object-fill"
						/>
						<div className="flex flex-1 flex-col items-start gap-[5px]">
							<span className="text-[#278467] text-lg font-bold" >
								Зөв хариуллаа! +15 XP
							</span>
							<span className="text-[#28233D] text-sm" >
								Компонентын нэр том үсгээр эхэлнэ. Жишээ нь Header. React үүнийг энгийн HTML тагуудаас ялгадаг.
							</span>
						</div>
						<button className="flex shrink-0 items-center bg-[#7C5CFC] text-left py-3.5 px-6 gap-3 rounded-2xl border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-white text-base font-bold" >
								Үргэлжлүүлэх
							</span>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/uo1xzpha_expires_30_days.png"} 
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