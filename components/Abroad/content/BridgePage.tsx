const BridgePage = () => {
  return (
    <>
      <h1 className="text-xl font-medium mb-5">파란 사다리 특징</h1>
      {/* 특징 나열 */}
      <div>
        <div className="mb-5">
          <h2 className="text-base font-medium">
            경제적, 사회적 취약계층 학생대상 해외연수 지원사업
          </h2>
          <p className="text-sm font-light">
            - 소득분위 0~5분위 이내 학생만 참가 가능
          </p>
          <p className="text-sm font-light">
            - 본교생 80명, 타교생 20명 파견 예정
          </p>
        </div>

        <div className="mb-5">
          <h2 className="text-base font-medium">
            미국 및 중국 대학에서 진행되는 고강도 해외 연수 프로그램(Intensive)
          </h2>
          <p className="text-sm font-light">
            - 세계적인 우수대학에서 진행되는 고강도 연수 프로그램
          </p>
          <p className="text-sm font-light">
            - 매주 15-20시간의 집중 언어 수업과 현지 대학생과 밀도 높은 튜터링
          </p>
        </div>
        <div className="mb-5">
          <h2 className="text-base font-medium">
            학점이나 영어 성적이 아닌 하고자 도전정신과 하는 의지를 바탕으로
            선발
          </h2>
          <p className="text-sm font-light">
            - '꿈과 열정 계획서' 서류 심사 바탕으로 심층 면접 진행
          </p>
        </div>
        <div className="mb-5">
          <h2 className="text-base font-medium">
            국고 지원 (70%) 및 아주대에서 모금한 외부 기부금(30%)을 통한 전액
            경비 지원
          </h2>
          <p className="text-sm font-light">
            - 프로그램 취지에 공감하는 외부 인사 대상 ‘100만원의 기적’ 모금
          </p>
          <p className="text-sm font-light">
            - 개인 식비 등을 제외한 프로그램 경비 전액 지원
          </p>
        </div>
        <div className="mb-5">
          <h2 className="text-base font-medium">
            {' '}
            10개의 주관대학에 권역별로 배정된 타대학 학생들도 선발
          </h2>
          <p className="text-sm font-light">
            - 참가인원의 20%를 경기, 서울 지역 타대학 학생들로 선발
          </p>
          <p className="text-sm font-light">
            - 아주대학교(주관대학) 프로그램에 지원가능한 타대학(담당대학)은
            한국장학재단에서 확인 (http://www.kosaf.go.kr/)
          </p>
        </div>

        <div className="mb-5">
          <h2 className="text-base font-medium">사전 교육 및 사후 교육 진행</h2>
          <p className="text-sm font-light">
            - 참가학생의 성격 및 진로성숙도를 진단, 해외 연수 전과 후에 변화된
            모습에 대한 결과비교를 바탕으로 개별 진로교육 진행
          </p>
          <p className="text-sm font-light">
            - 기초/소양교육, 특강, 멘토링 프로그램 진행
          </p>
          <p className="text-sm font-light">
            - 사후 성과발표회, 간담회 등을 통해 프로그램을 돌아보고, 향후
            관심있는 학생들을 위한 홍보의 기회를 제공
          </p>
        </div>
      </div>
    </>
  );
};

export default BridgePage;
