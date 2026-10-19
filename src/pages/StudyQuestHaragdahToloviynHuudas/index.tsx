import React, {useState} from "react";
export default (props) => {
	const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
	const [input3, onChangeInput3] = useState('');
	const [input4, onChangeInput4] = useState('');
	const [input5, onChangeInput5] = useState('');
	const [input6, onChangeInput6] = useState('');
	const [input7, onChangeInput7] = useState('');
	const [input8, onChangeInput8] = useState('');
	const [input9, onChangeInput9] = useState('');
	const [input10, onChangeInput10] = useState('');
	const [input11, onChangeInput11] = useState('');
	const [input12, onChangeInput12] = useState('');
	const [input13, onChangeInput13] = useState('');
	const [input14, onChangeInput14] = useState('');
	const [input15, onChangeInput15] = useState('');
	const [input16, onChangeInput16] = useState('');
	const [input17, onChangeInput17] = useState('');
	const [input18, onChangeInput18] = useState('');
	const [input19, onChangeInput19] = useState('');
	const [input20, onChangeInput20] = useState('');
	const [input21, onChangeInput21] = useState('');
	const [input22, onChangeInput22] = useState('');
	const [input23, onChangeInput23] = useState('');
	const [input24, onChangeInput24] = useState('');
	const [input25, onChangeInput25] = useState('');
	const [input26, onChangeInput26] = useState('');
	return (
		<div className="flex flex-col bg-white">
			<div className="flex flex-col items-start self-stretch bg-[#F7F6FC] py-8 pr-8 gap-4 overflow-hidden">
				<span className="text-[#28233D] text-[28px] font-bold ml-8" >
					Харагдах төлөвүүд
				</span>
				<span className="text-[#817B94] text-sm ml-8" >
					Зөвхөн статик загвар · Заах, дарах болон шилжих төлөвийг дүрслэв. Үйлдэл холбогдоогүй.
				</span>
				<div className="flex items-center self-stretch ml-8">
					<span className="text-[#817B94] text-xs mr-[113px]" >
						Элемент
					</span>
					<span className="text-[#7C5CFC] text-[13px] font-bold" >
						Энгийн
					</span>
					<div className="flex-1 self-stretch">
					</div>
					<span className="text-[#7C5CFC] text-[13px] font-bold" >
						Заахад
					</span>
					<div className="flex-1 self-stretch">
					</div>
					<span className="text-[#7C5CFC] text-[13px] font-bold" >
						Дарахад
					</span>
					<div className="flex-1 self-stretch">
					</div>
					<span className="text-[#7C5CFC] text-[13px] font-bold" >
						Сонгосон
					</span>
					<div className="flex-1 self-stretch">
					</div>
					<span className="text-[#7C5CFC] text-[13px] font-bold" >
						Идэвхгүй
					</span>
					<div className="flex-1 self-stretch">
					</div>
				</div>
				<div className="flex items-center self-stretch ml-8">
					<span className="text-[#28233D] text-[13px] font-bold mr-[83px]" >
						Үндсэн товч
					</span>
					<div className="flex flex-1 flex-col bg-white p-2.5 mr-3 rounded-2xl border border-solid border-[#EAE6F3]">
						<button className="flex flex-col items-center self-stretch bg-[#7C5CFC] text-left py-[15px] rounded-2xl border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-white text-[15px] font-bold" >
								Эхлэх
							</span>
						</button>
					</div>
					<div className="flex flex-1 flex-col bg-white p-2.5 mr-3 rounded-2xl border border-solid border-[#EAE6F3]">
						<button className="flex flex-col items-center self-stretch bg-[#8C70FF] text-left py-[15px] rounded-2xl border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-white text-[15px] font-bold" >
								Эхлэх
							</span>
						</button>
					</div>
					<div className="flex flex-1 flex-col bg-white p-2.5 mr-3 rounded-2xl border border-solid border-[#EAE6F3]">
						<button className="flex flex-col items-center self-stretch bg-[#5038B2] text-left py-[15px] rounded-2xl border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-white text-[15px] font-bold" >
								Эхлэх
							</span>
						</button>
					</div>
					<div className="flex flex-1 flex-col bg-white p-2.5 mr-3 rounded-2xl border border-solid border-[#EAE6F3]">
						<button className="flex justify-center items-center self-stretch bg-[#7C5CFC] text-left py-[15px] gap-[11px] rounded-2xl border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-white text-[15px] font-bold" >
								Эхлэх
							</span>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/l3qy2alv_expires_30_days.png"} 
								className="w-4 h-4 rounded-2xl object-fill"
							/>
						</button>
					</div>
					<div className="flex flex-1 flex-col bg-white p-2.5 rounded-2xl border border-solid border-[#EAE6F3]">
						<button className="flex flex-col items-center self-stretch bg-[#EAE6F3] text-left py-[15px] rounded-2xl border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-[#817B94] text-[15px] font-bold" >
								Эхлэх
							</span>
						</button>
					</div>
				</div>
				<div className="flex items-center self-stretch ml-8">
					<span className="text-[#28233D] text-[13px] font-bold mr-[85px]" >
						Туслах товч
					</span>
					<div className="flex flex-1 flex-col bg-white p-2.5 mr-3 rounded-2xl border border-solid border-[#EAE6F3]">
						<button className="flex flex-col items-center self-stretch bg-white text-left py-[15px] rounded-2xl border border-solid border-[#EAE6F3]"
							onClick={()=>alert("Pressed!")}>
							<span className="text-[#28233D] text-[15px] font-bold" >
								Эхлэх
							</span>
						</button>
					</div>
					<div className="flex flex-1 flex-col bg-white p-2.5 mr-3 rounded-2xl border border-solid border-[#EAE6F3]">
						<button className="flex flex-col items-center self-stretch bg-[#EEE9FF] text-left py-[15px] rounded-2xl border border-solid border-[#7C5CFC]"
							onClick={()=>alert("Pressed!")}>
							<span className="text-[#28233D] text-[15px] font-bold" >
								Эхлэх
							</span>
						</button>
					</div>
					<div className="flex flex-1 flex-col bg-white p-2.5 mr-3 rounded-2xl border border-solid border-[#EAE6F3]">
						<button className="flex flex-col items-center self-stretch bg-[#DED4FF] text-left py-[15px] rounded-2xl border border-solid border-[#EAE6F3]"
							onClick={()=>alert("Pressed!")}>
							<span className="text-[#28233D] text-[15px] font-bold" >
								Эхлэх
							</span>
						</button>
					</div>
					<div className="flex flex-1 flex-col bg-white p-2.5 mr-3 rounded-2xl border border-solid border-[#EAE6F3]">
						<button className="flex justify-center items-center self-stretch bg-[#EEE9FF] text-left py-[15px] gap-[11px] rounded-2xl border-2 border-solid border-[#7C5CFC]"
							onClick={()=>alert("Pressed!")}>
							<span className="text-[#28233D] text-[15px] font-bold" >
								Эхлэх
							</span>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/4mcytjg7_expires_30_days.png"} 
								className="w-4 h-4 rounded-2xl object-fill"
							/>
						</button>
					</div>
					<div className="flex flex-1 flex-col bg-white p-2.5 rounded-2xl border border-solid border-[#EAE6F3]">
						<button className="flex flex-col items-center self-stretch bg-[#EAE6F3] text-left py-[15px] rounded-2xl border border-solid border-[#EAE6F3]"
							onClick={()=>alert("Pressed!")}>
							<span className="text-[#817B94] text-[15px] font-bold" >
								Эхлэх
							</span>
						</button>
					</div>
				</div>
				<div className="flex items-center self-stretch ml-8">
					<span className="text-[#28233D] text-[13px] font-bold mr-[59px]" >
						Хичээлийн карт
					</span>
					<div className="flex-1 bg-white p-2.5 mr-3 rounded-2xl border border-solid border-[#EAE6F3]">
						<div className="flex items-center self-stretch bg-white rounded-2xl border border-solid border-[#EAE6F3]">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/dnmzv9as_expires_30_days.png"} 
								className="w-5 h-5 ml-3 mr-2.5 rounded-2xl object-fill"
							/>
							<input
								placeholder="Веб систем ба технологи"
								value={input1}
								onChange={(event)=>onChangeInput1(event.target.value)}
								className="flex-1 self-stretch text-[#28233D] bg-transparent text-[13px] font-bold py-3 mr-1 border-0"
							/>
						</div>
					</div>
					<div className="flex-1 bg-white p-2.5 mr-3 rounded-2xl border border-solid border-[#EAE6F3]">
						<div className="flex items-center self-stretch bg-[#EEE9FF] rounded-2xl border border-solid border-[#7C5CFC]">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/r48kh7l5_expires_30_days.png"} 
								className="w-5 h-5 ml-3 mr-2.5 rounded-2xl object-fill"
							/>
							<input
								placeholder="Веб систем ба технологи"
								value={input2}
								onChange={(event)=>onChangeInput2(event.target.value)}
								className="flex-1 self-stretch text-[#28233D] bg-transparent text-[13px] font-bold py-3 mr-1 border-0"
							/>
						</div>
					</div>
					<div className="flex-1 bg-white p-2.5 mr-3 rounded-2xl border border-solid border-[#EAE6F3]">
						<div className="flex items-center self-stretch bg-[#DED4FF] rounded-2xl border border-solid border-[#EAE6F3]">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/9t0uwx6m_expires_30_days.png"} 
								className="w-5 h-5 ml-3 mr-2.5 rounded-2xl object-fill"
							/>
							<input
								placeholder="Веб систем ба технологи"
								value={input3}
								onChange={(event)=>onChangeInput3(event.target.value)}
								className="flex-1 self-stretch text-[#28233D] bg-transparent text-[13px] font-bold py-3 mr-1 border-0"
							/>
						</div>
					</div>
					<div className="flex-1 bg-white p-2.5 mr-3 rounded-2xl border border-solid border-[#EAE6F3]">
						<div className="flex items-center self-stretch bg-[#EEE9FF] rounded-2xl border-2 border-solid border-[#7C5CFC]">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/52qhzz31_expires_30_days.png"} 
								className="w-5 h-5 ml-3 mr-2.5 rounded-2xl object-fill"
							/>
							<input
								placeholder="Веб систем ба технологи"
								value={input4}
								onChange={(event)=>onChangeInput4(event.target.value)}
								className="flex-1 self-stretch text-[#28233D] bg-transparent text-[13px] font-bold py-3 mr-1 border-0"
							/>
						</div>
					</div>
					<div className="flex-1 bg-white p-2.5 rounded-2xl border border-solid border-[#EAE6F3]">
						<div className="flex items-center self-stretch bg-[#F7F6FC] rounded-2xl border border-solid border-[#EAE6F3]">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/u88x494w_expires_30_days.png"} 
								className="w-5 h-5 ml-3 mr-2.5 rounded-2xl object-fill"
							/>
							<input
								placeholder="Веб систем ба технологи"
								value={input5}
								onChange={(event)=>onChangeInput5(event.target.value)}
								className="flex-1 self-stretch text-[#28233D] bg-transparent text-[13px] font-bold py-3 mr-1 border-0"
							/>
						</div>
					</div>
				</div>
				<div className="flex items-center self-stretch ml-8">
					<span className="text-[#28233D] text-[13px] font-bold mr-[31px]" >
						Хичээлийн зангилаа
					</span>
					<div className="flex flex-1 flex-col items-center bg-white p-2.5 mr-3 gap-1.5 rounded-2xl border border-solid border-[#EAE6F3]">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/kjvhrhr2_expires_30_days.png"} 
							className="w-[52px] h-[52px] rounded-[100px] object-fill"
						/>
						<span className="text-[#7C5CFC] text-xs" >
							Компонент
						</span>
					</div>
					<div className="flex flex-1 flex-col items-center bg-white p-2.5 mr-3 gap-1.5 rounded-2xl border border-solid border-[#EAE6F3]">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/kgexx5qb_expires_30_days.png"} 
							className="w-[52px] h-[52px] rounded-[100px] object-fill"
						/>
						<span className="text-[#7C5CFC] text-xs" >
							Компонент
						</span>
					</div>
					<div className="flex flex-1 flex-col items-center bg-white p-2.5 mr-3 gap-1.5 rounded-2xl border border-solid border-[#EAE6F3]">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/bptaj5zh_expires_30_days.png"} 
							className="w-[52px] h-[52px] rounded-[100px] object-fill"
						/>
						<span className="text-[#7C5CFC] text-xs" >
							Компонент
						</span>
					</div>
					<div className="flex flex-1 flex-col items-center bg-white p-2.5 mr-3 gap-1.5 rounded-2xl border border-solid border-[#EAE6F3]">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/9086i6e6_expires_30_days.png"} 
							className="w-[52px] h-[52px] rounded-[100px] object-fill"
						/>
						<span className="text-[#7C5CFC] text-xs" >
							Компонент
						</span>
					</div>
					<div className="flex flex-1 flex-col items-center bg-white p-2.5 gap-1.5 rounded-2xl border border-solid border-[#EAE6F3]">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/hvplpdq1_expires_30_days.png"} 
							className="w-[52px] h-[52px] rounded-[100px] object-fill"
						/>
						<span className="text-[#817B94] text-xs" >
							Компонент
						</span>
					</div>
				</div>
				<div className="flex items-center self-stretch ml-8">
					<span className="text-[#28233D] text-[13px] font-bold mr-9" >
						Хариултын сонголт
					</span>
					<div className="flex-1 bg-white p-2.5 mr-3 rounded-2xl border border-solid border-[#EAE6F3]">
						<div className="flex items-center self-stretch bg-white rounded-2xl border border-solid border-[#EAE6F3]">
							<div className="flex flex-col shrink-0 items-start bg-white py-[7px] px-[11px] ml-3.5 mr-3 rounded-lg border border-solid border-[#EAE6F3]">
								<span className="text-[#28233D] text-xs" >
									B
								</span>
							</div>
							<input
								placeholder="Хариулт"
								value={input6}
								onChange={(event)=>onChangeInput6(event.target.value)}
								className="flex-1 self-stretch text-[#28233D] bg-transparent text-[15px] py-[18px] mr-1 border-0"
							/>
						</div>
					</div>
					<div className="flex-1 bg-white p-2.5 mr-3 rounded-2xl border border-solid border-[#EAE6F3]">
						<div className="flex items-center self-stretch bg-[#EEE9FF] rounded-2xl border border-solid border-[#7C5CFC]">
							<div className="flex flex-col shrink-0 items-start bg-white py-[7px] px-[11px] ml-3.5 mr-3 rounded-lg border border-solid border-[#7C5CFC]">
								<span className="text-[#7C5CFC] text-xs" >
									B
								</span>
							</div>
							<input
								placeholder="Хариулт"
								value={input7}
								onChange={(event)=>onChangeInput7(event.target.value)}
								className="flex-1 self-stretch text-[#7C5CFC] bg-transparent text-[15px] py-[18px] mr-1 border-0"
							/>
						</div>
					</div>
					<div className="flex-1 bg-white p-2.5 mr-3 rounded-2xl border border-solid border-[#EAE6F3]">
						<div className="flex items-center self-stretch bg-[#DED4FF] rounded-2xl border border-solid border-[#7C5CFC]">
							<div className="flex flex-col shrink-0 items-start bg-white py-[7px] px-[11px] ml-3.5 mr-3 rounded-lg border border-solid border-[#7C5CFC]">
								<span className="text-[#7C5CFC] text-xs" >
									B
								</span>
							</div>
							<input
								placeholder="Хариулт"
								value={input8}
								onChange={(event)=>onChangeInput8(event.target.value)}
								className="flex-1 self-stretch text-[#7C5CFC] bg-transparent text-[15px] py-[18px] mr-1 border-0"
							/>
						</div>
					</div>
					<div className="flex-1 bg-white p-2.5 mr-3 rounded-2xl border border-solid border-[#EAE6F3]">
						<div className="flex items-center self-stretch bg-[#EEE9FF] p-3.5 rounded-2xl border-2 border-solid border-[#7C5CFC]">
							<button className="flex flex-col shrink-0 items-start bg-white text-left py-[7px] px-[11px] mr-3 rounded-lg border border-solid border-[#7C5CFC]"
								onClick={()=>alert("Pressed!")}>
								<span className="text-[#7C5CFC] text-xs" >
									B
								</span>
							</button>
							<span className="text-[#7C5CFC] text-[15px] font-bold" >
								Хариулт
							</span>
							<div className="flex-1 self-stretch">
							</div>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/rwdbw3dd_expires_30_days.png"} 
								className="w-5 h-5 rounded-2xl object-fill"
							/>
						</div>
					</div>
					<div className="flex-1 bg-white p-2.5 rounded-2xl border border-solid border-[#EAE6F3]">
						<div className="flex items-center self-stretch bg-[#F7F6FC] rounded-2xl border border-solid border-[#EAE6F3]">
							<div className="flex flex-col shrink-0 items-start bg-white py-[7px] px-[11px] ml-3.5 mr-3 rounded-lg border border-solid border-[#EAE6F3]">
								<span className="text-[#817B94] text-xs" >
									B
								</span>
							</div>
							<input
								placeholder="Хариулт"
								value={input9}
								onChange={(event)=>onChangeInput9(event.target.value)}
								className="flex-1 self-stretch text-[#817B94] bg-transparent text-[15px] py-[18px] mr-1 border-0"
							/>
						</div>
					</div>
				</div>
				<div className="flex items-center self-stretch ml-8">
					<span className="text-[#28233D] text-[13px] font-bold mr-[60px]" >
						Навигацийн таб
					</span>
					<div className="flex-1 bg-white p-2.5 mr-3 rounded-2xl border border-solid border-[#EAE6F3]">
						<div className="flex items-center self-stretch bg-white rounded-2xl border border-solid border-[#EAE6F3]">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/qry0pv5m_expires_30_days.png"} 
								className="w-5 h-5 ml-3 mr-2.5 rounded-2xl object-fill"
							/>
							<input
								placeholder="Судлах"
								value={input10}
								onChange={(event)=>onChangeInput10(event.target.value)}
								className="flex-1 self-stretch text-[#7C5CFC] bg-transparent text-[13px] font-bold py-4 mr-1 border-0"
							/>
						</div>
					</div>
					<div className="flex-1 bg-white p-2.5 mr-3 rounded-2xl border border-solid border-[#EAE6F3]">
						<div className="flex items-center self-stretch bg-[#EEE9FF] rounded-2xl border border-solid border-[#7C5CFC]">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/jh64nn72_expires_30_days.png"} 
								className="w-5 h-5 ml-3 mr-2.5 rounded-2xl object-fill"
							/>
							<input
								placeholder="Судлах"
								value={input11}
								onChange={(event)=>onChangeInput11(event.target.value)}
								className="flex-1 self-stretch text-[#7C5CFC] bg-transparent text-[13px] font-bold py-4 mr-1 border-0"
							/>
						</div>
					</div>
					<div className="flex-1 bg-white p-2.5 mr-3 rounded-2xl border border-solid border-[#EAE6F3]">
						<div className="flex items-center self-stretch bg-[#DED4FF] rounded-2xl border border-solid border-[#EAE6F3]">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/65lnm85x_expires_30_days.png"} 
								className="w-5 h-5 ml-3 mr-2.5 rounded-2xl object-fill"
							/>
							<input
								placeholder="Судлах"
								value={input12}
								onChange={(event)=>onChangeInput12(event.target.value)}
								className="flex-1 self-stretch text-[#7C5CFC] bg-transparent text-[13px] font-bold py-4 mr-1 border-0"
							/>
						</div>
					</div>
					<div className="flex-1 bg-white p-2.5 mr-3 rounded-2xl border border-solid border-[#EAE6F3]">
						<div className="flex items-center self-stretch bg-[#EEE9FF] rounded-2xl border-2 border-solid border-[#7C5CFC]">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/22l08mbm_expires_30_days.png"} 
								className="w-5 h-5 ml-3 mr-2.5 rounded-2xl object-fill"
							/>
							<input
								placeholder="Судлах"
								value={input13}
								onChange={(event)=>onChangeInput13(event.target.value)}
								className="flex-1 self-stretch text-[#7C5CFC] bg-transparent text-[13px] font-bold py-4 mr-1 border-0"
							/>
						</div>
					</div>
					<div className="flex-1 bg-white p-2.5 rounded-2xl border border-solid border-[#EAE6F3]">
						<div className="flex items-center self-stretch bg-[#F7F6FC] rounded-2xl border border-solid border-[#EAE6F3]">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/905s00bw_expires_30_days.png"} 
								className="w-5 h-5 ml-3 mr-2.5 rounded-2xl object-fill"
							/>
							<input
								placeholder="Судлах"
								value={input14}
								onChange={(event)=>onChangeInput14(event.target.value)}
								className="flex-1 self-stretch text-[#817B94] bg-transparent text-[13px] font-bold py-4 mr-1 border-0"
							/>
						</div>
					</div>
				</div>
				<div className="flex items-center self-stretch ml-8">
					<span className="text-[#28233D] text-[13px] font-bold mr-[107px]" >
						Холбоос
					</span>
					<div className="flex flex-col shrink-0 items-start bg-white py-2.5 pl-2.5 pr-[71px] mr-3 rounded-2xl border border-solid border-[#EAE6F3]">
						<span className="text-[#7C5CFC] text-sm font-bold" >
							Дэлгэрэнгүй →
						</span>
					</div>
					<div className="flex flex-col shrink-0 items-start bg-white py-2.5 pl-2.5 pr-9 mr-3 rounded-2xl border border-solid border-[#EAE6F3]">
						<span className="text-[#7C5CFC] text-sm font-bold 
							textDecorationLine: underline" >
							Дэлгэрэнгүй →
						</span>
					</div>
					<button className="flex flex-col shrink-0 items-start bg-white text-left p-2.5 mr-[13px] rounded-2xl border border-solid border-[#EAE6F3]"
						onClick={()=>alert("Pressed!")}>
						<span className="text-[#5038B2] text-sm font-bold" >
							Дэлгэрэнгүй →
						</span>
					</button>
					<button className="flex flex-col shrink-0 items-start bg-white text-left p-2.5 mr-3 rounded-2xl border border-solid border-[#EAE6F3]"
						onClick={()=>alert("Pressed!")}>
						<span className="text-[#7C5CFC] text-sm font-bold 
							textDecorationLine: underline" >
							Дэлгэрэнгүй →
						</span>
					</button>
					<button className="flex flex-col shrink-0 items-start bg-white text-left p-2.5 rounded-2xl border border-solid border-[#EAE6F3]"
						onClick={()=>alert("Pressed!")}>
						<span className="text-[#817B94] text-sm font-bold" >
							Дэлгэрэнгүй →
						</span>
					</button>
				</div>
				<div className="flex items-center self-stretch ml-8">
					<span className="text-[#28233D] text-[13px] font-bold mr-[59px]" >
						Өрөөний чиглэл
					</span>
					<div className="flex-1 bg-white p-2.5 mr-3 rounded-2xl border border-solid border-[#EAE6F3]">
						<div className="flex items-center self-stretch bg-white rounded-2xl border border-solid border-[#EAE6F3]">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/1gnszjiq_expires_30_days.png"} 
								className="w-5 h-5 ml-3 mr-2.5 rounded-2xl object-fill"
							/>
							<input
								placeholder="Дадлага хийх"
								value={input15}
								onChange={(event)=>onChangeInput15(event.target.value)}
								className="flex-1 self-stretch text-[#7C5CFC] bg-transparent text-[13px] font-bold py-4 mr-1 border-0"
							/>
						</div>
					</div>
					<div className="flex-1 bg-white p-2.5 mr-3 rounded-2xl border border-solid border-[#EAE6F3]">
						<div className="flex items-center self-stretch bg-[#EEE9FF] rounded-2xl border border-solid border-[#7C5CFC]">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/u0ure5fp_expires_30_days.png"} 
								className="w-5 h-5 ml-3 mr-2.5 rounded-2xl object-fill"
							/>
							<input
								placeholder="Дадлага хийх"
								value={input16}
								onChange={(event)=>onChangeInput16(event.target.value)}
								className="flex-1 self-stretch text-[#7C5CFC] bg-transparent text-[13px] font-bold py-4 mr-1 border-0"
							/>
						</div>
					</div>
					<div className="flex-1 bg-white p-2.5 mr-3 rounded-2xl border border-solid border-[#EAE6F3]">
						<div className="flex items-center self-stretch bg-[#DED4FF] rounded-2xl border border-solid border-[#EAE6F3]">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/7m29q4ni_expires_30_days.png"} 
								className="w-5 h-5 ml-3 mr-2.5 rounded-2xl object-fill"
							/>
							<input
								placeholder="Дадлага хийх"
								value={input17}
								onChange={(event)=>onChangeInput17(event.target.value)}
								className="flex-1 self-stretch text-[#7C5CFC] bg-transparent text-[13px] font-bold py-4 mr-1 border-0"
							/>
						</div>
					</div>
					<div className="flex-1 bg-white p-2.5 mr-3 rounded-2xl border border-solid border-[#EAE6F3]">
						<div className="flex items-center self-stretch bg-[#EEE9FF] rounded-2xl border-2 border-solid border-[#7C5CFC]">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/hgyh9xx7_expires_30_days.png"} 
								className="w-5 h-5 ml-3 mr-2.5 rounded-2xl object-fill"
							/>
							<input
								placeholder="Дадлага хийх"
								value={input18}
								onChange={(event)=>onChangeInput18(event.target.value)}
								className="flex-1 self-stretch text-[#7C5CFC] bg-transparent text-[13px] font-bold py-4 mr-1 border-0"
							/>
						</div>
					</div>
					<div className="flex-1 bg-white p-2.5 rounded-2xl border border-solid border-[#EAE6F3]">
						<div className="flex items-center self-stretch bg-[#F7F6FC] rounded-2xl border border-solid border-[#EAE6F3]">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/rfty91or_expires_30_days.png"} 
								className="w-5 h-5 ml-3 mr-2.5 rounded-2xl object-fill"
							/>
							<input
								placeholder="Дадлага хийх"
								value={input19}
								onChange={(event)=>onChangeInput19(event.target.value)}
								className="flex-1 self-stretch text-[#817B94] bg-transparent text-[13px] font-bold py-4 mr-1 border-0"
							/>
						</div>
					</div>
				</div>
				<span className="text-[#28233D] text-lg font-bold ml-8" >
					Өрөөний дөрвөн тайлбар
				</span>
				<div className="flex items-center self-stretch ml-8 gap-4">
					<div className="flex flex-1 items-center bg-white rounded-2xl border border-solid border-[#EAE6F3]">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/0zq58ial_expires_30_days.png"} 
							className="w-5 h-5 ml-4 mr-2.5 rounded-2xl object-fill"
						/>
						<input
							placeholder="Дадлага хийх"
							value={input20}
							onChange={(event)=>onChangeInput20(event.target.value)}
							className="flex-1 self-stretch text-[#28233D] bg-transparent text-sm font-bold py-4 mr-1 border-0"
						/>
					</div>
					<div className="flex flex-1 items-center bg-white rounded-2xl border border-solid border-[#EAE6F3]">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/sm7emlsn_expires_30_days.png"} 
							className="w-5 h-5 ml-4 mr-2.5 rounded-2xl object-fill"
						/>
						<input
							placeholder="Судлах"
							value={input21}
							onChange={(event)=>onChangeInput21(event.target.value)}
							className="flex-1 self-stretch text-[#28233D] bg-transparent text-sm font-bold py-4 mr-1 border-0"
						/>
					</div>
					<div className="flex flex-1 items-center bg-white rounded-2xl border border-solid border-[#EAE6F3]">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/zieuqyxb_expires_30_days.png"} 
							className="w-5 h-5 ml-4 mr-2.5 rounded-2xl object-fill"
						/>
						<input
							placeholder="Чансаа"
							value={input22}
							onChange={(event)=>onChangeInput22(event.target.value)}
							className="flex-1 self-stretch text-[#28233D] bg-transparent text-sm font-bold py-4 mr-1 border-0"
						/>
					</div>
					<div className="flex flex-1 items-center bg-white rounded-2xl border border-solid border-[#EAE6F3]">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/lh52xv6f_expires_30_days.png"} 
							className="w-5 h-5 ml-4 mr-2.5 rounded-2xl object-fill"
						/>
						<input
							placeholder="Амрах · Гарах"
							value={input23}
							onChange={(event)=>onChangeInput23(event.target.value)}
							className="flex-1 self-stretch text-[#28233D] bg-transparent text-sm font-bold py-4 mr-1 border-0"
						/>
					</div>
				</div>
				<div className="flex items-start self-stretch ml-8 gap-5">
					<div className="flex flex-1 flex-col items-start bg-white py-5 pr-5 gap-4 rounded-3xl border border-solid border-[#EAE6F3]">
						<span className="text-[#28233D] text-lg font-bold ml-5" >
							Нэвтрэх · Заавал бөглөх
						</span>
						<span className="text-[#28233D] text-sm font-bold ml-5" >
							Оюутны код *
						</span>
						<input
							placeholder="Оюутны кодоо оруулна уу"
							value={input24}
							onChange={(event)=>onChangeInput24(event.target.value)}
							className="self-stretch text-[#817B94] bg-white text-sm p-3.5 ml-5 rounded-2xl border border-solid border-[#CB6375]"
						/>
						<span className="text-[#CB6375] text-xs ml-5" >
							Оюутны кодоо оруулна уу.
						</span>
						<span className="text-[#28233D] text-sm font-bold ml-5" >
							Нууц үг *
						</span>
						<input
							placeholder="Нууц үгээ оруулна уу"
							value={input25}
							onChange={(event)=>onChangeInput25(event.target.value)}
							className="self-stretch text-[#817B94] bg-white text-sm p-3.5 ml-5 rounded-2xl border border-solid border-[#CB6375]"
						/>
						<span className="text-[#CB6375] text-xs ml-5" >
							Нууц үгээ оруулна уу.
						</span>
						<button className="flex flex-col items-center self-stretch bg-[#EAE6F3] text-left py-[15px] ml-5 rounded-2xl border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-[#817B94] text-[15px] font-bold" >
								Сэрэх
							</span>
						</button>
					</div>
					<div className="flex flex-1 flex-col items-start bg-white py-5 pr-5 gap-4 rounded-3xl border border-solid border-[#EAE6F3]">
						<span className="text-[#28233D] text-lg font-bold ml-5" >
							Нэвтрэх · Алдаа
						</span>
						<span className="text-[#28233D] text-sm font-bold ml-5" >
							Оюутны код
						</span>
						<span className="text-[#28233D] text-sm ml-5" >
							B23CS0142
						</span>
						<span className="text-[#28233D] text-sm font-bold ml-5" >
							Нууц үг
						</span>
						<input
							placeholder="••••••••••"
							value={input26}
							onChange={(event)=>onChangeInput26(event.target.value)}
							className="self-stretch text-[#28233D] bg-[#FFF0F2] text-sm p-3.5 ml-5 rounded-2xl border border-solid border-[#CB6375]"
						/>
						<span className="text-[#CB6375] text-sm w-[389px] ml-5" >
							Оюутны код эсвэл нууц үг буруу байна. Дахин оролдоно уу.
						</span>
						<button className="flex flex-col items-center self-stretch bg-[#7C5CFC] text-left py-[15px] ml-5 rounded-2xl border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-white text-[15px] font-bold" >
								Дахин оролдох
							</span>
						</button>
						<span className="text-[#7C5CFC] text-[13px] ml-5" >
							Нууц үгээ мартсан уу?
						</span>
					</div>
					<div className="flex flex-1 flex-col items-start bg-white py-5 pr-5 gap-4 rounded-3xl border border-solid border-[#EAE6F3]">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/kxwkxwvc_expires_30_days.png"} 
							className="w-8 h-8 ml-5 rounded-3xl object-fill"
						/>
						<span className="text-[#28233D] text-xl font-bold ml-5" >
							Амрах уу?
						</span>
						<span className="text-[#817B94] text-sm w-[352px] ml-5" >
							Өрөөнөөс гарахдаа итгэлтэй байна уу? Чиний ахиц хадгалагдана.
						</span>
						<button className="flex flex-col items-center self-stretch bg-white text-left py-[15px] ml-5 rounded-2xl border border-solid border-[#EAE6F3]"
							onClick={()=>alert("Pressed!")}>
							<span className="text-[#28233D] text-[15px] font-bold" >
								Үргэлжлүүлэн суралцах
							</span>
						</button>
						<button className="flex flex-col items-center self-stretch bg-[#7C5CFC] text-left py-[15px] ml-5 rounded-2xl border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-white text-[15px] font-bold" >
								Амрах · Гарах
							</span>
						</button>
					</div>
				</div>
				<span className="text-[#28233D] text-lg font-bold ml-8" >
					Дадлага · Дахин оролдох / Үргэлжлүүлэх / Буцах
				</span>
				<div className="flex items-center self-stretch ml-8 gap-4">
					<div className="flex flex-1 flex-col items-start bg-white py-5 pr-5 gap-4 rounded-3xl border border-solid border-[#EAE6F3]">
						<span className="text-[#28233D] text-sm font-bold ml-5" >
							Дахин оролдох
						</span>
						<button className="flex flex-col items-center self-stretch bg-[#7C5CFC] text-left py-[15px] ml-5 rounded-2xl border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-white text-[15px] font-bold" >
								Дахин оролдох
							</span>
						</button>
						<button className="flex flex-col items-center self-stretch bg-[#8C70FF] text-left py-[15px] ml-5 rounded-2xl border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-white text-[15px] font-bold" >
								Дахин оролдох
							</span>
						</button>
						<button className="flex flex-col items-center self-stretch bg-[#5038B2] text-left py-[15px] ml-5 rounded-2xl border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-white text-[15px] font-bold" >
								Дахин оролдох
							</span>
						</button>
						<button className="flex flex-col items-center self-stretch bg-[#EAE6F3] text-left py-[15px] ml-5 rounded-2xl border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-[#817B94] text-[15px] font-bold" >
								Дахин оролдох
							</span>
						</button>
					</div>
					<div className="flex flex-1 flex-col items-start bg-white py-5 pr-5 gap-4 rounded-3xl border border-solid border-[#EAE6F3]">
						<span className="text-[#28233D] text-sm font-bold ml-5" >
							Үргэлжлүүлэх
						</span>
						<button className="flex flex-col items-center self-stretch bg-[#7C5CFC] text-left py-[15px] ml-5 rounded-2xl border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-white text-[15px] font-bold" >
								Үргэлжлүүлэх
							</span>
						</button>
						<button className="flex flex-col items-center self-stretch bg-[#8C70FF] text-left py-[15px] ml-5 rounded-2xl border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-white text-[15px] font-bold" >
								Үргэлжлүүлэх
							</span>
						</button>
						<button className="flex flex-col items-center self-stretch bg-[#5038B2] text-left py-[15px] ml-5 rounded-2xl border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-white text-[15px] font-bold" >
								Үргэлжлүүлэх
							</span>
						</button>
						<button className="flex flex-col items-center self-stretch bg-[#EAE6F3] text-left py-[15px] ml-5 rounded-2xl border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-[#817B94] text-[15px] font-bold" >
								Үргэлжлүүлэх
							</span>
						</button>
					</div>
					<div className="flex flex-1 flex-col items-start bg-white py-5 pr-5 gap-4 rounded-3xl border border-solid border-[#EAE6F3]">
						<span className="text-[#28233D] text-sm font-bold ml-5" >
							Буцах
						</span>
						<button className="flex flex-col items-center self-stretch bg-[#7C5CFC] text-left py-[15px] ml-5 rounded-2xl border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-white text-[15px] font-bold" >
								Буцах
							</span>
						</button>
						<button className="flex flex-col items-center self-stretch bg-[#8C70FF] text-left py-[15px] ml-5 rounded-2xl border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-white text-[15px] font-bold" >
								Буцах
							</span>
						</button>
						<button className="flex flex-col items-center self-stretch bg-[#5038B2] text-left py-[15px] ml-5 rounded-2xl border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-white text-[15px] font-bold" >
								Буцах
							</span>
						</button>
						<button className="flex flex-col items-center self-stretch bg-[#EAE6F3] text-left py-[15px] ml-5 rounded-2xl border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-[#817B94] text-[15px] font-bold" >
								Буцах
							</span>
						</button>
					</div>
				</div>
				<div className="flex items-center self-stretch ml-8 gap-5">
					<div className="flex flex-1 items-center bg-[#FFF0F2] p-3.5 rounded-2xl border-2 border-solid border-[#CB6375]">
						<button className="flex flex-col shrink-0 items-start bg-white text-left py-[7px] px-2.5 mr-3 rounded-lg border border-solid border-[#CB6375]"
							onClick={()=>alert("Pressed!")}>
							<span className="text-[#CB6375] text-xs" >
								A
							</span>
						</button>
						<span className="text-[#CB6375] text-[15px] font-bold" >
							Буруу хариулт
						</span>
						<div className="flex-1 self-stretch">
						</div>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/bv83459x_expires_30_days.png"} 
							className="w-5 h-5 rounded-2xl object-fill"
						/>
					</div>
					<div className="flex flex-1 items-center bg-[#E7F6EF] p-3.5 rounded-2xl border-2 border-solid border-[#278467]">
						<button className="flex flex-col shrink-0 items-start bg-white text-left py-[7px] px-[11px] mr-3 rounded-lg border border-solid border-[#278467]"
							onClick={()=>alert("Pressed!")}>
							<span className="text-[#278467] text-xs" >
								B
							</span>
						</button>
						<span className="text-[#278467] text-[15px] font-bold" >
							Зөв хариулт
						</span>
						<div className="flex-1 self-stretch">
						</div>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/qe2tbdqq_expires_30_days.png"} 
							className="w-5 h-5 rounded-2xl object-fill"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}