const stocks = [
  { code: '095570', name: 'AJ네트웍스' },
  { code: '006840', name: 'AK홀딩스' },
  { code: '027410', name: 'BGF' },
  { code: '282330', name: 'BGF리테일' },
  { code: '138930', name: 'BNK금융지주' },
  { code: '001460', name: 'BYC' },
  { code: '001040', name: 'CJ' },
  { code: '079160', name: 'CJ CGV' },
  { code: '000120', name: 'CJ대한통운' },
  { code: '011150', name: 'CJ씨푸드' },
  { code: '097950', name: 'CJ제일제당' },
  { code: '000590', name: 'CS홀딩스' },
  { code: '012030', name: 'DB' },
  { code: '016610', name: 'DB금융투자' },
  { code: '005830', name: 'DB손해보험' },
  { code: '000990', name: 'DB하이텍' },
  { code: '139130', name: 'DGB금융지주' },
  { code: '004840', name: 'DRB동일' },
  { code: '155660', name: 'DSR' },
  { code: '069730', name: 'DSR제강' },
  { code: '017940', name: 'E1' },
  { code: '007700', name: 'F&F' },
  { code: '114090', name: 'GKL' },
  { code: '078930', name: 'GS' },
  { code: '006360', name: 'GS건설' },
  { code: '001250', name: 'GS글로벌' },
  { code: '007070', name: 'GS리테일' },
  { code: '012630', name: 'HDC' },
  { code: '039570', name: 'HDC아이콘트롤스' },
  { code: '089470', name: 'HDC현대EP' },
  { code: '294870', name: 'HDC현대산업개발' },
  { code: '011200', name: 'HMM' },
  { code: '082740', name: 'HSD엔진' },
  { code: '175330', name: 'JB금융지주' },
  { code: '234080', name: 'JW생명과학' },
  { code: '001060', name: 'JW중외제약' },
  { code: '096760', name: 'JW홀딩스' },
  { code: '105560', name: 'KB금융' },
  { code: '009440', name: 'KC그린홀딩스' },
  { code: '119650', name: 'KC코트렐' },
  { code: '092220', name: 'KEC' },
  { code: '016380', name: 'KG동부제철' },
  { code: '001390', name: 'KG케미칼' },
  { code: '001940', name: 'KISCO홀딩스' },
  { code: '025000', name: 'KPX케미칼' },
  { code: '092230', name: 'KPX홀딩스' },
  { code: '000040', name: 'KR모터스' },
  { code: '044450', name: 'KSS해운' },
  { code: '030210', name: 'KTB투자증권' },
  { code: '058850', name: 'KTcs' },
  { code: '058860', name: 'KTis' },
  { code: '093050', name: 'LF' },
  { code: '003550', name: 'LG' },
  { code: '034220', name: 'LG디스플레이' },
  { code: '001120', name: 'LG상사' },
  { code: '051900', name: 'LG생활건강' },
  { code: '032640', name: 'LG유플러스' },
  { code: '011070', name: 'LG이노텍' },
  { code: '066570', name: 'LG전자' },
  { code: '108670', name: 'LG하우시스' },
  { code: '037560', name: 'LG헬로비전' },
  { code: '051910', name: 'LG화학' },
  { code: '079550', name: 'LIG넥스원' },
  { code: '006260', name: 'LS' },
  { code: '000680', name: 'LS네트웍스' },
  { code: '229640', name: 'LS전선아시아' },
  { code: '023150', name: 'MH에탄올' },
  { code: '035420', name: 'NAVER' },
  { code: '005940', name: 'NH투자증권' },
  { code: '338100', name: 'NH프라임리츠' },
  { code: '034310', name: 'NICE' },
  { code: '008260', name: 'NI스틸' },
  { code: '010060', name: 'OCI' },
  { code: '100840', name: 'S&TC' },
  { code: '064960', name: 'S&T모티브' },
  { code: '003570', name: 'S&T중공업' },
  { code: '036530', name: 'S&T홀딩스' },
  { code: '010950', name: 'S-Oil' },
  { code: '034120', name: 'SBS' },
  { code: '101060', name: 'SBS미디어홀딩스' },
  { code: '004060', name: 'SG세계물산' },
  { code: '001380', name: 'SG충방' },
  { code: '002360', name: 'SH에너지화학' },
  { code: '009160', name: 'SIMPAC' },
  { code: '034730', name: 'SK' },
  { code: '011790', name: 'SKC' },
  { code: '018670', name: 'SK가스' },
  { code: '001740', name: 'SK네트웍스' },
  { code: '006120', name: 'SK디스커버리' },
  { code: '210980', name: 'SK디앤디' },
  { code: '068400', name: 'SK렌터카' },
  { code: '096770', name: 'SK이노베이션' },
  { code: '001510', name: 'SK증권' },
  { code: '285130', name: 'SK케미칼' },
  { code: '017670', name: 'SK텔레콤' },
  { code: '000660', name: 'SK하이닉스' },
  { code: '005610', name: 'SPC삼립' },
  { code: '011810', name: 'STX' },
  { code: '077970', name: 'STX엔진' },
  { code: '071970', name: 'STX중공업' },
  { code: '002710', name: 'TCC스틸' },
  { code: '024070', name: 'WISCOM' },
  { code: '037270', name: 'YG PLUS' },
  { code: '000500', name: '가온전선' },
  { code: '000860', name: '강남제비스코' },
  { code: '035250', name: '강원랜드' },
  { code: '011420', name: '갤럭시아에스엠' },
  { code: '002100', name: '경농' },
  { code: '009450', name: '경동나비엔' },
  { code: '267290', name: '경동도시가스' },
  { code: '012320', name: '경동인베스트' },
  { code: '000050', name: '경방' },
  { code: '214390', name: '경보제약' },
  { code: '012610', name: '경인양행' },
  { code: '009140', name: '경인전자' },
  { code: '013580', name: '계룡건설산업' },
  { code: '012200', name: '계양전기' },
  { code: '002140', name: '고려산업' },
  { code: '010130', name: '고려아연' },
  { code: '002240', name: '고려제강' },
  { code: '009290', name: '광동제약' },
  { code: '017040', name: '광명전기' },
  { code: '017900', name: '광전자' },
  { code: '037710', name: '광주신세계' },
  { code: '030610', name: '교보증권' },
  { code: '007690', name: '국도화학' },
  { code: '005320', name: '국동' },
  { code: '001140', name: '국보' },
  { code: '002720', name: '국제약품' },
  { code: '083420', name: '그린케미칼' },
  { code: '014530', name: '극동유화' },
  { code: '014280', name: '금강공업' },
  { code: '008870', name: '금비' },
  { code: '001570', name: '금양' },
  { code: '002990', name: '금호산업' },
  { code: '011780', name: '금호석유화학' },
  { code: '214330', name: '금호에이치티' },
  { code: '001210', name: '금호전기' },
  { code: '073240', name: '금호타이어' },
  { code: '092440', name: '기신정기' },
  { code: '000270', name: '기아자동차' },
  { code: '024110', name: '기업은행' },
  { code: '013700', name: '까뮤이앤씨' },
  { code: '004540', name: '깨끗한나라' },
  { code: '001260', name: '남광토건' },
  { code: '008350', name: '남선알미늄' },
  { code: '004270', name: '남성' },
  { code: '003920', name: '남양유업' },
  { code: '025860', name: '남해화학' },
  { code: '005720', name: '넥센' },
  { code: '002350', name: '넥센타이어' },
  { code: '003580', name: '넥스트사이언스' },
  { code: '251270', name: '넷마블' },
  { code: '090350', name: '노루페인트' },
  { code: '000320', name: '노루홀딩스' },
  { code: '006280', name: '녹십자' },
  { code: '005250', name: '녹십자홀딩스' },
  { code: '004370', name: '농심' },
  { code: '072710', name: '농심홀딩스' },
  { code: '058730', name: '다스코' },
  { code: '023590', name: '다우기술' },
  { code: '019680', name: '대교' },
  { code: '006370', name: '대구백화점' },
  { code: '008060', name: '대덕' },
  { code: '353200', name: '대덕전자' },
  { code: '000490', name: '대동공업' },
  { code: '008110', name: '대동전자' },
  { code: '001880', name: '대림건설' },
  { code: '005750', name: '대림비앤코' },
  { code: '000210', name: '대림산업' },
  { code: '006570', name: '대림통상' },
  { code: '001680', name: '대상' },
  { code: '084690', name: '대상홀딩스' },
  { code: '128820', name: '대성산업' },
  { code: '117580', name: '대성에너지' },
  { code: '016710', name: '대성홀딩스' },
  { code: '003540', name: '대신증권' },
  { code: '009190', name: '대양금속' },
  { code: '014160', name: '대영포장' },
  { code: '047040', name: '대우건설' },
  { code: '009320', name: '대우부품' },
  { code: '042660', name: '대우조선해양' },
  { code: '003090', name: '대웅' },
  { code: '069620', name: '대웅제약' },
  { code: '000430', name: '대원강업' },
  { code: '006340', name: '대원전선' },
  { code: '003220', name: '대원제약' },
  { code: '024890', name: '대원화성' },
  { code: '002880', name: '대유에이텍' },
  { code: '000300', name: '대유플러스' },
  { code: '012800', name: '대창' },
  { code: '015230', name: '대창단조' },
  { code: '001070', name: '대한방직' },
  { code: '006650', name: '대한유화' },
  { code: '001440', name: '대한전선' },
  { code: '084010', name: '대한제강' },
  { code: '001790', name: '대한제당' },
  { code: '001130', name: '대한제분' },
  { code: '003490', name: '대한항공' },
  { code: '005880', name: '대한해운' },
  { code: '003830', name: '대한화섬' },
  { code: '016090', name: '대현' },
  { code: '069460', name: '대호에이엘' },
  { code: '192080', name: '더블유게임즈' },
  { code: '012510', name: '더존비즈온' },
  { code: '004830', name: '덕성' },
  { code: '024900', name: '덕양산업' },
  { code: '145720', name: '덴티움' },
  { code: '002150', name: '도화엔지니어링' },
  { code: '001230', name: '동국제강' },
  { code: '023450', name: '동남합성' },
  { code: '004140', name: '동방' },
  { code: '007590', name: '동방아그로' },
  { code: '005960', name: '동부건설' },
  { code: '026960', name: '동서' },
  { code: '002210', name: '동성제약' },
  { code: '102260', name: '동성코퍼레이션' },
  { code: '005190', name: '동성화학' },
  { code: '000640', name: '동아쏘시오홀딩스' },
  { code: '170900', name: '동아에스티' },
  { code: '028100', name: '동아지질' },
  { code: '282690', name: '동아타이어' },
  { code: '001520', name: '동양' },
  { code: '084670', name: '동양고속' },
  { code: '002900', name: '동양물산기업' },
  { code: '082640', name: '동양생명' },
  { code: '008970', name: '동양철관' },
  { code: '092780', name: '동양피스톤' },
  { code: '049770', name: '동원F&B' },
  { code: '018500', name: '동원금속' },
  { code: '006040', name: '동원산업' },
  { code: '030720', name: '동원수산' },
  { code: '014820', name: '동원시스템즈' },
  { code: '163560', name: '동일고무벨트' },
  { code: '004890', name: '동일산업' },
  { code: '002690', name: '동일제강' },
  { code: '000020', name: '동화약품' },
  { code: '000150', name: '두산' },
  { code: '241560', name: '두산밥캣' },
  { code: '336370', name: '두산솔루스' },
  { code: '042670', name: '두산인프라코어' },
  { code: '034020', name: '두산중공업' },
  { code: '336260', name: '두산퓨얼셀' },
  { code: '016740', name: '두올' },
  { code: '192650', name: '드림텍' },
  { code: '024090', name: '디씨엠' },
  { code: '003160', name: '디아이' },
  { code: '001530', name: '디아이동일' },
  { code: '092200', name: '디아이씨' },
  { code: '013570', name: '디와이' },
  { code: '210540', name: '디와이파워' },
  { code: '007340', name: '디티알오토모티브' },
  { code: '026890', name: '디피씨' },
  { code: '115390', name: '락앤락' },
  { code: '032350', name: '롯데관광개발' },
  { code: '330590', name: '롯데리츠' },
  { code: '000400', name: '롯데손해보험' },
  { code: '023530', name: '롯데쇼핑' },
  { code: '004000', name: '롯데정밀화학' },
  { code: '286940', name: '롯데정보통신' },
  { code: '280360', name: '롯데제과' },
  { code: '004990', name: '롯데지주' },
  { code: '005300', name: '롯데칠성음료' },
  { code: '011170', name: '롯데케미칼' },
  { code: '002270', name: '롯데푸드' },
  { code: '071840', name: '롯데하이마트' },
  { code: '027740', name: '마니커' },
  { code: '204320', name: '만도' },
  { code: '001080', name: '만호제강' },
  { code: '088980', name: '맥쿼리인프라' },
  { code: '094800', name: '맵스리얼티1' },
  { code: '138040', name: '메리츠금융지주' },
  { code: '008560', name: '메리츠증권' },
  { code: '000060', name: '메리츠화재' },
  { code: '090370', name: '메타랩스' },
  { code: '017180', name: '명문제약' },
  { code: '012690', name: '모나리자' },
  { code: '005360', name: '모나미' },
  { code: '204210', name: '모두투어리츠' },
  { code: '009680', name: '모토닉' },
  { code: '009580', name: '무림P&P' },
  { code: '009200', name: '무림페이퍼' },
  { code: '033920', name: '무학' },
  { code: '008420', name: '문배철강' },
  { code: '025560', name: '미래산업' },
  { code: '007120', name: '미래아이앤지' },
  { code: '006800', name: '미래에셋대우' },
  { code: '357250', name: '미래에셋맵스리츠' },
  { code: '085620', name: '미래에셋생명' },
  { code: '002840', name: '미원상사' },
  { code: '268280', name: '미원에스씨' },
  { code: '107590', name: '미원홀딩스' },
  { code: '134380', name: '미원화학' },
  { code: '003650', name: '미창석유공업' },
  { code: '155900', name: '바다로19호' },
  { code: '003610', name: '방림' },
  { code: '001340', name: '백광산업' },
  { code: '035150', name: '백산' },
  { code: '002410', name: '범양건영' },
  { code: '096300', name: '베트남개발1' },
  { code: '007210', name: '벽산' },
  { code: '002760', name: '보락' },
  { code: '003850', name: '보령제약' },
  { code: '000890', name: '보해양조' },
  { code: '003000', name: '부광약품' },
  { code: '001270', name: '부국증권' },
  { code: '026940', name: '부국철강' },
  { code: '015350', name: '부산도시가스' },
  { code: '011390', name: '부산산업' },
  { code: '005030', name: '부산주공' },
  { code: '002070', name: '비비안' },
  { code: '100220', name: '비상교육' },
  { code: '030790', name: '비케이탑스' },
  { code: '101140', name: '비티원' },
  { code: '352820', name: '빅히트' },
  { code: '005180', name: '빙그레' },
  { code: '003960', name: '사조대림' },
  { code: '008040', name: '사조동아원' },
  { code: '007160', name: '사조산업' },
  { code: '014710', name: '사조씨푸드' },
  { code: '006090', name: '사조오양' },
  { code: '005090', name: '삼광글라스' },
  { code: '001470', name: '삼부토건' },
  { code: '006400', name: '삼성SDI' },
  { code: '006660', name: '삼성공조' },
  { code: '028260', name: '삼성물산' },
  { code: '207940', name: '삼성바이오로직스' },
  { code: '032830', name: '삼성생명' },
  { code: '018260', name: '삼성에스디에스' },
  { code: '028050', name: '삼성엔지니어링' },
  { code: '009150', name: '삼성전기' },
  { code: '005930', name: '삼성전자' },
  { code: '001360', name: '삼성제약' },
  { code: '010140', name: '삼성중공업' },
  { code: '016360', name: '삼성증권' },
  { code: '068290', name: '삼성출판사' },
  { code: '029780', name: '삼성카드' },
  { code: '000810', name: '삼성화재해상보험' },
  { code: '006110', name: '삼아알미늄' },
  { code: '145990', name: '삼양사' },
  { code: '003230', name: '삼양식품' },
  { code: '002170', name: '삼양통상' },
  { code: '272550', name: '삼양패키징' },
  { code: '000070', name: '삼양홀딩스' },
  { code: '002810', name: '삼영무역' },
  { code: '005680', name: '삼영전자공업' },
  { code: '003720', name: '삼영화학공업' },
  { code: '023000', name: '삼원강재' },
  { code: '004380', name: '삼익THK' },
  { code: '002450', name: '삼익악기' },
  { code: '004440', name: '삼일씨엔에스' },
  { code: '000520', name: '삼일제약' },
  { code: '009770', name: '삼정펄프' },
  { code: '005500', name: '삼진제약' },
  { code: '004690', name: '삼천리' },
  { code: '010960', name: '삼호개발' },
  { code: '004450', name: '삼화왕관' },
  { code: '009470', name: '삼화전기' },
  { code: '011230', name: '삼화전자공업' },
  { code: '001820', name: '삼화콘덴서공업' },
  { code: '000390', name: '삼화페인트공업' },
  { code: '001290', name: '상상인증권' },
  { code: '041650', name: '상신브레이크' },
  { code: '075180', name: '새론오토모티브' },
  { code: '007540', name: '샘표' },
  { code: '248170', name: '샘표식품' },
  { code: '007860', name: '서연' },
  { code: '200880', name: '서연이화' },
  { code: '017390', name: '서울도시가스' },
  { code: '004410', name: '서울식품공업' },
  { code: '021050', name: '서원' },
  { code: '008490', name: '서흥' },
  { code: '007610', name: '선도전기' },
  { code: '136490', name: '선진' },
  { code: '002820', name: '선창산업' },
  { code: '014910', name: '성문전자' },
  { code: '003080', name: '성보화학' },
  { code: '004980', name: '성신양회' },
  { code: '011300', name: '성안' },
  { code: '000180', name: '성창기업지주' },
  { code: '002420', name: '세기상사' },
  { code: '004360', name: '세방' },
  { code: '004490', name: '세방전지' },
  { code: '001430', name: '세아베스틸' },
  { code: '306200', name: '세아제강' },
  { code: '003030', name: '세아제강지주' },
  { code: '019440', name: '세아특수강' },
  { code: '058650', name: '세아홀딩스' },
  { code: '013000', name: '세우글로벌' },
  { code: '091090', name: '세원셀론텍' },
  { code: '021820', name: '세원정공' },
  { code: '067830', name: '세이브존I&C' },
  { code: '033530', name: '세종공업' },
  { code: '075580', name: '세진중공업' },
  { code: '027970', name: '세하' },
  { code: '145210', name: '세화아이엠씨' },
  { code: '308170', name: '센트랄모텍' },
  { code: '012600', name: '센트럴인사이트' },
  { code: '068270', name: '셀트리온' },
  { code: '004430', name: '송원산업' },
  { code: '017550', name: '수산중공업' },
  { code: '134790', name: '시디즈' },
  { code: '016590', name: '신대양제지' },
  { code: '029530', name: '신도리코' },
  { code: '004970', name: '신라교역' },
  { code: '011930', name: '신성이엔지' },
  { code: '005390', name: '신성통상' },
  { code: '004170', name: '신세계' },
  { code: '035510', name: '신세계I&C' },
  { code: '034300', name: '신세계건설' },
  { code: '031430', name: '신세계인터내셔날' },
  { code: '031440', name: '신세계푸드' },
  { code: '006880', name: '신송홀딩스' },
  { code: '005800', name: '신영와코루' },
  { code: '001720', name: '신영증권' },
  { code: '009270', name: '신원' },
  { code: '002700', name: '신일전자' },
  { code: '019170', name: '신풍제약' },
  { code: '002870', name: '신풍제지' },
  { code: '293940', name: '신한알파리츠' },
  { code: '055550', name: '신한지주' },
  { code: '001770', name: '신화실업' },
  { code: '004080', name: '신흥' },
  { code: '102280', name: '쌍방울' },
  { code: '003410', name: '쌍용양회공업' },
  { code: '003620', name: '쌍용자동차' },
  { code: '004770', name: '써니전자' },
  { code: '015540', name: '쎌마테라퓨틱스' },
  { code: '004920', name: '씨아이테크' },
  { code: '112610', name: '씨에스윈드' },
  { code: '008700', name: '아남전자' },
  { code: '090430', name: '아모레퍼시픽' },
  { code: '002790', name: '아모레퍼시픽그룹' },
  { code: '002030', name: '아세아' },
  { code: '183190', name: '아세아시멘트' },
  { code: '002310', name: '아세아제지' },
  { code: '267850', name: '아시아나IDT' },
  { code: '020560', name: '아시아나항공' },
  { code: '122900', name: '아이마켓코리아' },
  { code: '010780', name: '아이에스동서' },
  { code: '003560', name: '아이에이치큐' },
  { code: '033660', name: '아주캐피탈' },
  { code: '001780', name: '알루코' },
  { code: '018250', name: '애경산업' },
  { code: '161000', name: '애경유화' },
  { code: '011090', name: '에넥스' },
  { code: '005850', name: '에스엘' },
  { code: '012750', name: '에스원' },
  { code: '123700', name: '에스제이엠' },
  { code: '025530', name: '에스제이엠홀딩스' },
  { code: '326030', name: '에스케이바이오팜' },
  { code: '023960', name: '에쓰씨엔지니어링' },
  { code: '298690', name: '에어부산' },
  { code: '140910', name: '에이리츠' },
  { code: '078520', name: '에이블씨엔씨' },
  { code: '015260', name: '에이엔피' },
  { code: '007460', name: '에이프로젠 KIC' },
  { code: '003060', name: '에이프로젠제약' },
  { code: '036570', name: '엔씨소프트' },
  { code: '138250', name: '엔에스쇼핑' },
  { code: '181710', name: '엔에이치엔' },
  { code: '085310', name: '엔케이' },
  { code: '009810', name: '엔케이물산' },
  { code: '004250', name: '엔피씨' },
  { code: '900140', name: '엘브이엠씨' },
  { code: '010120', name: '엘에스일렉트릭' },
  { code: '014440', name: '영보화학' },
  { code: '111770', name: '영원무역' },
  { code: '009970', name: '영원무역홀딩스' },
  { code: '003520', name: '영진약품' },
  { code: '000670', name: '영풍' },
  { code: '006740', name: '영풍제지' },
  { code: '012280', name: '영화금속' },
  { code: '012160', name: '영흥' },
  { code: '015360', name: '예스코홀딩스' },
  { code: '007310', name: '오뚜기' },
  { code: '002630', name: '오리엔트바이오' },
  { code: '271560', name: '오리온' },
  { code: '001800', name: '오리온홀딩스' },
  { code: '070960', name: '용평리조트' },
  { code: '316140', name: '우리금융지주' },
  { code: '004720', name: '우리들제약' },
  { code: '118000', name: '우리들휴브레인' },
  { code: '010050', name: '우리종금' },
  { code: '006980', name: '우성사료' },
  { code: '017370', name: '우신시스템' },
  { code: '105840', name: '우진' },
  { code: '010400', name: '우진아이엔에스' },
  { code: '049800', name: '우진플라임' },
  { code: '016880', name: '웅진' },
  { code: '095720', name: '웅진씽크빅' },
  { code: '005820', name: '원림' },
  { code: '010600', name: '웰바이오텍' },
  { code: '008600', name: '윌비스' },
  { code: '033270', name: '유나이티드' },
  { code: '014830', name: '유니드' },
  { code: '000910', name: '유니온' },
  { code: '047400', name: '유니온머티리얼' },
  { code: '011330', name: '유니켐' },
  { code: '077500', name: '유니퀘스트' },
  { code: '002920', name: '유성기업' },
  { code: '000700', name: '유수홀딩스' },
  { code: '003470', name: '유안타증권' },
  { code: '011690', name: '유양디앤유' },
  { code: '072130', name: '유엔젤' },
  { code: '000220', name: '유유제약' },
  { code: '001200', name: '유진증권' },
  { code: '000100', name: '유한양행' },
  { code: '003460', name: '유화증권' },
  { code: '008730', name: '율촌화학' },
  { code: '008250', name: '이건산업' },
  { code: '025820', name: '이구산업' },
  { code: '214320', name: '이노션' },
  { code: '088260', name: '이리츠코크렙' },
  { code: '139480', name: '이마트' },
  { code: '007660', name: '이수페타시스' },
  { code: '005950', name: '이수화학' },
  { code: '015020', name: '이스타코' },
  { code: '093230', name: '이아이디' },
  { code: '074610', name: '이엔플러스' },
  { code: '102460', name: '이연제약' },
  { code: '084680', name: '이월드' },
  { code: '350520', name: '이지스레지던스리츠' },
  { code: '334890', name: '이지스밸류플러스리츠' },
  { code: '000760', name: '이화산업' },
  { code: '014990', name: '인디에프' },
  { code: '006490', name: '인스코비' },
  { code: '023800', name: '인지컨트롤스' },
  { code: '034590', name: '인천도시가스' },
  { code: '129260', name: '인터지스' },
  { code: '023810', name: '인팩' },
  { code: '249420', name: '일동제약' },
  { code: '000230', name: '일동홀딩스' },
  { code: '013360', name: '일성건설' },
  { code: '003120', name: '일성신약' },
  { code: '003200', name: '일신방직' },
  { code: '007110', name: '일신석재' },
  { code: '007570', name: '일양약품' },
  { code: '008500', name: '일정실업' },
  { code: '081000', name: '일진다이아' },
  { code: '020760', name: '일진디스플' },
  { code: '020150', name: '일진머티리얼즈' },
  { code: '103590', name: '일진전기' },
  { code: '015860', name: '일진홀딩스' },
  { code: '226320', name: '잇츠한불' },
  { code: '317400', name: '자이에스앤디' },
  { code: '033240', name: '자화전자' },
  { code: '000950', name: '전방' },
  { code: '348950', name: '제이알글로벌리츠' },
  { code: '194370', name: '제이에스코퍼레이션' },
  { code: '025620', name: '제이준코스메틱' },
  { code: '036420', name: '제이콘텐트리' },
  { code: '030000', name: '제일기획' },
  { code: '271980', name: '제일약품' },
  { code: '001560', name: '제일연마' },
  { code: '002620', name: '제일파마홀딩스' },
  { code: '006220', name: '제주은행' },
  { code: '089590', name: '제주항공' },
  { code: '004910', name: '조광페인트' },
  { code: '004700', name: '조광피혁' },
  { code: '001550', name: '조비' },
  { code: '000480', name: '조선내화' },
  { code: '120030', name: '조선선재' },
  { code: '018470', name: '조일알미늄' },
  { code: '002600', name: '조흥' },
  { code: '185750', name: '종근당' },
  { code: '063160', name: '종근당바이오' },
  { code: '001630', name: '종근당홀딩스' },
  { code: '044380', name: '주연테크' },
  { code: '013890', name: '지누스' },
  { code: '013870', name: '지엠비코리아' },
  { code: '071320', name: '지역난방공사' },
  { code: '010580', name: '지코' },
  { code: '035000', name: '지투알' },
  { code: '088790', name: '진도' },
  { code: '003780', name: '진양산업' },
  { code: '010640', name: '진양폴리우레탄' },
  { code: '100250', name: '진양홀딩스' },
  { code: '051630', name: '진양화학' },
  { code: '272450', name: '진에어' },
  { code: '011000', name: '진원생명과학' },
  { code: '002780', name: '진흥기업' },
  { code: '009310', name: '참엔지니어링' },
  { code: '000650', name: '천일고속' },
  { code: '033250', name: '체시스' },
  { code: '035720', name: '카카오' },
  { code: '006380', name: '카프로' },
  { code: '109070', name: '컨버즈' },
  { code: '001620', name: '케이비아이동국실업' },
  { code: '029460', name: '케이씨' },
  { code: '002380', name: '케이씨씨' },
  { code: '344820', name: '케이씨씨글라스' },
  { code: '281820', name: '케이씨텍' },
  { code: '009070', name: '케이씨티시' },
  { code: '145270', name: '케이탑리츠' },
  { code: '030200', name: '케이티' },
  { code: '053210', name: '케이티스카이라이프' },
  { code: '033780', name: '케이티앤지' },
  { code: '357120', name: '코람코에너지리츠' },
  { code: '007810', name: '코리아써키트' },
  { code: '152330', name: '코리아오토글라스' },
  { code: '003690', name: '코리안리' },
  { code: '192820', name: '코스맥스' },
  { code: '044820', name: '코스맥스비티아이' },
  { code: '005070', name: '코스모신소재' },
  { code: '005420', name: '코스모화학' },
  { code: '071950', name: '코아스' },
  { code: '002020', name: '코오롱' },
  { code: '003070', name: '코오롱글로벌' },
  { code: '144620', name: '코오롱머티리얼' },
  { code: '120110', name: '코오롱인더' },
  { code: '138490', name: '코오롱플라스틱' },
  { code: '021240', name: '코웨이' },
  { code: '031820', name: '콤텍시스템' },
  { code: '192400', name: '쿠쿠홀딩스' },
  { code: '284740', name: '쿠쿠홈시스' },
  { code: '015590', name: '큐로' },
  { code: '264900', name: '크라운제과' },
  { code: '005740', name: '크라운해태홀딩스' },
  { code: '020120', name: '키다리스튜디오' },
  { code: '039490', name: '키움증권' },
  { code: '012170', name: '키위미디어그룹' },
  { code: '014580', name: '태경비케이' },
  { code: '015890', name: '태경산업' },
  { code: '006890', name: '태경케미컬' },
  { code: '003240', name: '태광산업' },
  { code: '011280', name: '태림포장' },
  { code: '004100', name: '태양금속공업' },
  { code: '009410', name: '태영건설' },
  { code: '001420', name: '태원물산' },
  { code: '007980', name: '태평양물산' },
  { code: '055490', name: '테이팩스' },
  { code: '078000', name: '텔코웨어' },
  { code: '214420', name: '토니모리' },
  { code: '084870', name: '티비에이치글로벌' },
  { code: '019180', name: '티에이치엔' },
  { code: '363280', name: '티와이홀딩스' },
  { code: '091810', name: '티웨이항공' },
  { code: '004870', name: '티웨이홀딩스' },
  { code: '005690', name: '파미셀' },
  { code: '036580', name: '팜스코' },
  { code: '028670', name: '팬오션' },
  { code: '010820', name: '퍼스텍' },
  { code: '016800', name: '퍼시스' },
  { code: '001020', name: '페이퍼코리아' },
  { code: '090080', name: '평화산업' },
  { code: '010770', name: '평화홀딩스' },
  { code: '005490', name: '포스코' },
  { code: '058430', name: '포스코강판' },
  { code: '047050', name: '포스코인터내셔널' },
  { code: '003670', name: '포스코케미칼' },
  { code: '007630', name: '폴루스바이오팜' },
  { code: '017810', name: '풀무원' },
  { code: '103140', name: '풍산' },
  { code: '005810', name: '풍산홀딩스' },
  { code: '033180', name: '필룩스' },
  { code: '086790', name: '하나금융지주' },
  { code: '293480', name: '하나제약' },
  { code: '039130', name: '하나투어' },
  { code: '172580', name: '하이골드12호' },
  { code: '153360', name: '하이골드3호' },
  { code: '071090', name: '하이스틸' },
  { code: '019490', name: '하이트론씨스템즈' },
  { code: '000080', name: '하이트진로' },
  { code: '000140', name: '하이트진로홀딩스' },
  { code: '152550', name: '한국ANKOR유전' },
  { code: '036460', name: '한국가스공사' },
  { code: '005430', name: '한국공항' },
  { code: '071050', name: '한국금융지주' },
  { code: '010040', name: '한국내화' },
  { code: '025540', name: '한국단자공업' },
  { code: '004090', name: '한국석유공업' },
  { code: '002200', name: '한국수출포장공업' },
  { code: '002960', name: '한국쉘석유' },
  { code: '123890', name: '한국자산신탁' },
  { code: '015760', name: '한국전력공사' },
  { code: '006200', name: '한국전자홀딩스' },
  { code: '009540', name: '한국조선해양' },
  { code: '023350', name: '한국종합기술' },
  { code: '025890', name: '한국주강' },
  { code: '000970', name: '한국주철관공업' },
  { code: '104700', name: '한국철강' },
  { code: '017960', name: '한국카본' },
  { code: '161890', name: '한국콜마' },
  { code: '024720', name: '한국콜마홀딩스' },
  { code: '161390', name: '한국타이어앤테크놀로지' },
  { code: '000240', name: '한국테크놀로지그룹' },
  { code: '034830', name: '한국토지신탁' },
  { code: '007280', name: '한국특수형강' },
  { code: '168490', name: '한국패러랠' },
  { code: '010100', name: '한국프랜지공업' },
  { code: '047810', name: '한국항공우주' },
  { code: '123690', name: '한국화장품' },
  { code: '003350', name: '한국화장품제조' },
  { code: '011500', name: '한농화성' },
  { code: '002390', name: '한독' },
  { code: '014790', name: '한라' },
  { code: '060980', name: '한라홀딩스' },
  { code: '053690', name: '한미글로벌' },
  { code: '042700', name: '한미반도체' },
  { code: '008930', name: '한미사이언스' },
  { code: '128940', name: '한미약품' },
  { code: '009240', name: '한샘' },
  { code: '020000', name: '한섬' },
  { code: '003680', name: '한성기업' },
  { code: '105630', name: '한세실업' },
  { code: '069640', name: '한세엠케이' },
  { code: '016450', name: '한세예스24홀딩스' },
  { code: '009180', name: '한솔로지스틱스' },
  { code: '213500', name: '한솔제지' },
  { code: '014680', name: '한솔케미칼' },
  { code: '004710', name: '한솔테크닉스' },
  { code: '010420', name: '한솔피엔에스' },
  { code: '004150', name: '한솔홀딩스' },
  { code: '025750', name: '한솔홈데코' },
  { code: '004960', name: '한신공영' },
  { code: '011700', name: '한신기계공업' },
  { code: '001750', name: '한양증권' },
  { code: '018880', name: '한온시스템' },
  { code: '009420', name: '한올바이오파마' },
  { code: '014130', name: '한익스프레스' },
  { code: '300720', name: '한일시멘트' },
  { code: '002220', name: '한일철강' },
  { code: '006390', name: '한일현대시멘트' },
  { code: '003300', name: '한일홀딩스' },
  { code: '051600', name: '한전KPS' },
  { code: '052690', name: '한전기술' },
  { code: '130660', name: '한전산업' },
  { code: '002320', name: '한진' },
  { code: '097230', name: '한진중공업' },
  { code: '003480', name: '한진중공업홀딩스' },
  { code: '180640', name: '한진칼' },
  { code: '005110', name: '한창' },
  { code: '009460', name: '한창제지' },
  { code: '000880', name: '한화' },
  { code: '088350', name: '한화생명' },
  { code: '000370', name: '한화손해보험' },
  { code: '009830', name: '한화솔루션' },
  { code: '272210', name: '한화시스템' },
  { code: '012450', name: '한화에어로스페이스' },
  { code: '003530', name: '한화투자증권' },
  { code: '195870', name: '해성디에스' },
  { code: '101530', name: '해태제과식품' },
  { code: '143210', name: '핸즈코퍼레이션' },
  { code: '000720', name: '현대건설' },
  { code: '267270', name: '현대건설기계' },
  { code: '005440', name: '현대그린푸드' },
  { code: '086280', name: '현대글로비스' },
  { code: '064350', name: '현대로템' },
  { code: '079430', name: '현대리바트' },
  { code: '012330', name: '현대모비스' },
  { code: '010620', name: '현대미포조선' },
  { code: '069960', name: '현대백화점' },
  { code: '004560', name: '현대비앤지스틸' },
  { code: '004310', name: '현대약품' },
  { code: '322000', name: '현대에너지솔루션' },
  { code: '126560', name: '현대에이치씨엔' },
  { code: '017800', name: '현대엘리베이터' },
  { code: '307950', name: '현대오토에버' },
  { code: '011210', name: '현대위아' },
  { code: '267260', name: '현대일렉트릭' },
  { code: '005380', name: '현대자동차' },
  { code: '004020', name: '현대제철' },
  { code: '011760', name: '현대종합상사' },
  { code: '267250', name: '현대중공업지주' },
  { code: '001500', name: '현대차증권' },
  { code: '227840', name: '현대코퍼레이션홀딩스' },
  { code: '001450', name: '현대해상' },
  { code: '057050', name: '현대홈쇼핑' },
  { code: '093240', name: '형지엘리트' },
  { code: '003010', name: '혜인' },
  { code: '111110', name: '호전실업' },
  { code: '008770', name: '호텔신라' },
  { code: '002460', name: '화성산업' },
  { code: '013520', name: '화승알앤에이' },
  { code: '241590', name: '화승엔터프라이즈' },
  { code: '006060', name: '화승인더스트리' },
  { code: '010690', name: '화신' },
  { code: '133820', name: '화인베스틸' },
  { code: '010660', name: '화천기계' },
  { code: '000850', name: '화천기공' },
  { code: '016580', name: '환인제약' },
  { code: '032560', name: '황금에스티' },
  { code: '004800', name: '효성' },
  { code: '094280', name: '효성 ITX' },
  { code: '298040', name: '효성중공업' },
  { code: '298050', name: '효성첨단소재' },
  { code: '298020', name: '효성티앤씨' },
  { code: '298000', name: '효성화학' },
  { code: '093370', name: '후성' },
  { code: '081660', name: '휠라홀딩스' },
  { code: '005870', name: '휴니드테크놀러지스' },
  { code: '079980', name: '휴비스' },
  { code: '005010', name: '휴스틸' },
  { code: '069260', name: '휴켐스' },
  { code: '000540', name: '흥국화재' },
  { code: '003280', name: '흥아해운' },
];

export default stocks;