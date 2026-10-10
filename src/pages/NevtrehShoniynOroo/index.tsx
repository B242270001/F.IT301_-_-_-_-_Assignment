import React, {useState} from "react";
export default (props) => {
	const [input1, onChangeInput1] = useState('');
	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-[#F7F6FC] overflow-hidden">
				<div className="flex items-center self-stretch">
					<div className="flex flex-1 flex-col items-start bg-[#24203F] pt-12 pr-12">
						<div className="flex items-center mb-[30px] ml-12 gap-2.5">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/9bp2kiv5_expires_30_days.png"} 
								className="w-9 h-9 rounded-xl object-fill"
							/>
							<span className="text-white text-[22px] font-bold" >
								StudyQuest
							</span>
						</div>
						<div className="flex flex-col items-start pr-[117px] mb-[30px] ml-12 gap-2.5">
							<span className="text-[#B5ADDA] text-[13px] font-bold" >
								ЧИНИЙ МЭДЛЭГИЙН АДАЛ ЯВДАЛ
							</span>
							<span className="text-white text-[40px] font-bold" >
								Шинэ өдөр. Шинэ боломж.
							</span>
							<span className="text-[#B5ADDA] text-base" >
								Тавтай амраарай. Дараагийн аялал чинь эндээс эхэлнэ.
							</span>
						</div>
						<div className="self-stretch bg-[#211839] h-[575px] mb-[30px] ml-12">
						</div>
						<div className="flex justify-between items-center self-stretch mb-3 ml-12">
							<span className="text-[#B5ADDA] text-[13px]" >
								Өнөөдрийн жижиг алхам — маргаашийн том ахиц.
							</span>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/p3tkfqh7_expires_30_days.png"} 
								className="w-[18px] h-[18px] object-fill"
							/>
						</div>
					</div>
					<div className="flex flex-col items-start w-[560px] py-[52px]">
						<div className="flex items-center mb-[107px] ml-16 gap-2">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/mimc0s0k_expires_30_days.png"} 
								className="w-5 h-5 object-fill"
							/>
							<span className="text-[#817B94] text-[13px] font-bold" >
								ОЮУТНЫ СУРАЛЦАХ ОРОН ЗАЙ
							</span>
						</div>
						<div className="flex flex-col items-center self-stretch mb-[107px]">
							<div className="flex flex-col items-start w-[432px] gap-6">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/f2o0b7jc_expires_30_days.png"} 
									className="w-16 h-16 rounded-[20px] object-fill"
								/>
								<div className="flex flex-col items-start self-stretch gap-2.5">
									<span className="text-[#28233D] text-[32px] font-bold" >
										Тавтай морил!
									</span>
									<span className="text-[#817B94] text-base" >
										Өрөөндөө орж, мэдлэгийн аяллаа үргэлжлүүлээрэй.
									</span>
								</div>
								<div className="flex flex-col items-start self-stretch gap-2">
									<span className="text-[#28233D] text-sm font-bold" >
										Оюутны код
									</span>
									<div className="flex items-center self-stretch bg-white rounded-2xl border border-solid border-[#EAE6F3]">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/od1p7mrm_expires_30_days.png"} 
											className="w-[19px] h-[19px] ml-4 mr-3 rounded-2xl object-fill"
										/>
										<input
											placeholder="B23CS0142"
											value={input1}
											onChange={(event)=>onChangeInput1(event.target.value)}
											className="flex-1 self-stretch text-[#28233D] bg-transparent text-base py-4 mr-1 border-0"
										/>
									</div>
								</div>
								<div className="flex flex-col items-start self-stretch gap-2">
									<span className="text-[#28233D] text-sm font-bold" >
										Нууц үг
									</span>
									<div className="flex justify-between items-center self-stretch bg-white p-4 rounded-2xl border border-solid border-[#EAE6F3]">
										<div className="flex shrink-0 items-center gap-3">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/0rl1k0jk_expires_30_days.png"} 
												className="w-[19px] h-[19px] object-fill"
											/>
											<span className="text-[#28233D] text-base" >
												••••••••••
											</span>
										</div>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/hg46g16a_expires_30_days.png"} 
											className="w-[19px] h-[19px] rounded-2xl object-fill"
										/>
									</div>
								</div>
								<div className="flex flex-col items-end self-stretch pr-0.5">
									<span className="text-[#7C5CFC] text-[13px] font-bold" >
										Нууц үгээ мартсан уу?
									</span>
								</div>
								<button className="flex justify-center items-center self-stretch bg-[#7C5CFC] text-left py-3.5 gap-[13px] rounded-2xl border-0"
									onClick={()=>alert("Pressed!")}>
									<span className="text-white text-base font-bold" >
										Сэрэх
									</span>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/wf78l9lo_expires_30_days.png"} 
										className="w-[18px] h-[18px] rounded-2xl object-fill"
									/>
								</button>
								<div className="flex flex-col items-center self-stretch">
									<span className="text-[#817B94] text-[13px]" >
										Сургуулийнхаа эрхээр нэвтэрнэ үү.
									</span>
								</div>
							</div>
						</div>
						<div className="flex flex-col items-center self-stretch">
							<div className="flex items-center">
								<span className="text-[#817B94] text-xs mr-[267px]" >
									© 2026 StudyQuest
								</span>
								<span className="text-[#817B94] text-xs" >
									Тусламж
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}