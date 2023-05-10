export default function Footer() {
  return (
    <footer className="space-between flex min-w-[1280px] max-w-[1500px] space-x-5 px-10 py-5 bg-gray-100">
      <div className="flex w-1/4 flex-col space-y-5">
        <h1 className="text-xs font-semibold">고객 서비스</h1>
        <span className="text-xs text-gray-400">주문조회</span>
        <span className="text-xs text-gray-400">반품신청</span>
        <span className="text-xs text-gray-400">자주 하는 질문</span>
        <span className="text-xs text-gray-400">배송</span>
        <span className="text-xs text-gray-400">문의하기</span>
        <span className="text-xs font-semibold text-red-800">
          개인정보 처리방침
        </span>
        <span className="text-xs text-gray-400">쿠키정책</span>
        <span className="text-xs text-gray-400">이용약관</span>
      </div>
      <div className="flex w-1/4 flex-col space-y-5">
        <h1 className="text-xs font-semibold uppercase tracking-widest">
          parix
        </h1>
        <span className="text-xs text-gray-400">패릭스 소개</span>
        <span className="text-xs text-gray-400">패릭스 미션</span>
        <span className="text-xs text-gray-400">패릭스 헬스 인 마인드</span>
        <span className="text-xs text-gray-400">브랜드 파트너십</span>
        <span className="text-xs text-gray-400">패릭스 앱</span>
      </div>
      <div className="flex w-1/4 flex-col space-y-5">
        <h1 className="text-xs font-semibold uppercase tracking-widest">
          parix - boutique
        </h1>
        <p className="text-xs text-gray-400">
          패릭스 부띠끄에서 최정상 브랜드를 경험하세요
        </p>
        <span className="cursor-pointer text-sm text-gray-600 underline underline-offset-2 hover:text-gray-900">
          PARIX - BOUTIQUE 쇼핑하기
        </span>
      </div>
    </footer>
  );
}
