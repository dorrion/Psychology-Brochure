import Head from 'next/head';
import Layout from 'components/layout';
import { Check } from 'components/icon';
import PostHead from 'components/Home/PostHead';

export default function index() {
  return (
    <Layout>
      <PostHead />
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-12 max-w-[64rem] mx-auto flex flex-col">
          <h1 className="text-6xl sm:text-5xl font-bold font-sans text-gray-900 mb-4 text-left">
            심리학과 메일 쓰기
          </h1>
          <div className="w-full mx-auto flexBox flex-col">
            <h2 className="text-2xl font-bold mb-12">
              공식적인 메일 작성 요소
            </h2>
            <div className="flex flex-col sm:flex-row">
              {/* 제목 */}
              <div className="flex">
                <div className="mr-2.5 w-12 h-12 flex-shrink-0 flexBox bg-primaryColor circle text-slate-50">
                  제목
                </div>
                <div>
                  <div className="flex ">
                    <Check /> <p className="ml-2">작성자의 소속</p>
                  </div>
                  <div className="flex mt-2.5">
                    <Check /> <p className="ml-2">메일의 목적</p>
                  </div>
                </div>
              </div>
              {/* 내용 */}
              <div className="flex ml-0 sm:ml-32 mt-8 sm:mt-0">
                <div className="mr-2.5 w-12 h-12 flex-shrink-0 flexBox bg-[#505050] circle text-slate-50">
                  내용
                </div>
                <div>
                  <div className="flex ">
                    <Check /> <p className="ml-2">작성자 소개</p>
                  </div>
                  <div className="flex  mt-2.5">
                    <Check /> <p className="ml-2">메일의 목적</p>
                  </div>
                  <div className="flex  mt-2.5">
                    <Check /> <p className="ml-2">인사</p>
                  </div>
                  <div className="flex  mt-2.5">
                    <Check /> <p className="ml-2">보낸 이</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font bg-gray-200 dark:bg-slate-700">
        <div className="container px-5 py-12 max-w-xl mx-auto flex flex-col">
          <h2 className="font-bold text-2xl mb-4 text-center">
            메일 작성 CONCEPT : Simple
          </h2>
          <h3 className="text-base text-center mb-8">
            메일은 간결하게, 본인의 신원과 메일의 목적을 명확하게 제시할 것.
          </h3>
          <div className="w-full max-w-sm mx-auto p-8 bg-gray-100 mb-8">
            <p className="text-xl dark_text800 font-medium mb-4">
              제목 : [00학개론 X011] 코로나19 출석 문의
            </p>
            <p className="dark_text800 font-medium mb-4">내용 :</p>
            <p className="dark_text800 mb-4">
              안녕하세요 교수님 00학개론 X011반 수강생 00학과 000입니다.{' '}
            </p>
            <p className="dark_text800 mb-4">
              다름이 아니라 코로나19 감염으로 인해 대면 수업이 불가능한 상황에
              있습니다. 출석인증을 위한 문서가 무엇이 있으며 비대면으로 수업에
              참여할 수 있는 방법이 알 수 있을까요? 감사합니다.
            </p>
            <p className="mt-8 dark_text800">000드림</p>
          </div>
          <div className="w-full max-w-sm mx-auto bg-green-500 text-white text-center p-5">
            코로나19로 인한 대면 수업 수강이 어려워 교수님께 메일을 보내야하는
            상황
          </div>
        </div>
      </section>
    </Layout>
  );
}
