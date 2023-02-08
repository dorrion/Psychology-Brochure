import path from 'path';
import Head from 'next/head';
import { promises as fs } from 'fs';
import Layout from 'components/layout';
import { MemberProps } from 'shared/store/type';
import MemberWrapper from 'components/Introduce/MemberWrapper';

export default function Introduce({ MemberData }: any) {
  const MemberLists: JSX.Element[] = MemberData.map((member: MemberProps) => (
    <div className="lg:w-1/3 md:w-1/2 p-4 w-full" key={member.memberId!}>
      <MemberWrapper
        memberId={member.memberId}
        profileImg={member.profileImg!}
        name={member.name!}
        role={member.role!}
      />
    </div>
  ));

  return (
    <Layout>
      <Head>
        <title>구르는 감자단 소개</title>
        <meta
          name="description"
          content="안녕하세요 구르는 감자단입니다. 저희 팀과 프로젝트에 대해 소개합니다."
        />
        <meta
          name="keywords"
          content="아주대학교, 심리학과, 구르는 감자단, 팀원 소개"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="구르는 감자단 소개" />
        <meta
          property="og:description"
          content="안녕하세요 구르는 감자단입니다. 저희 팀과 프로젝트에 대해 소개합니다."
        />
        <meta
          property="og:image"
          content="/_next/image?url=%2Fimages%2F%ED%99%88%EC%A1%B8%EC%97%85.webp&w=256&q=75 1x, /_next/image?url=%2Fimages%2F%ED%99%88%EC%A1%B8%EC%97%85.webp&w=640&q=75 2x"
        />
        <meta
          property="og:url"
          content="https://psychology-brochure.vercel.app/"
        />
        <meta property="og:type" content="website" />
      </Head>
      <section className="text-gray-600 body-font  max-w-[64rem] mx-auto">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex-col flex-wrap w-full mb-20">
            <h2 className="mt-6 text-center text-5xl font-black tracking-tight text-gray-900">
              구르는 감자단 소개
            </h2>
            <p className="mt-2 text-center text-base font-extralight text-gray-600">
              프로젝트 사용 설명 및 팀 소개
            </p>
          </div>

          <section>
            <p className="text-5xl font-medium text-left">
              <span className="text-left text-neutral-800 dark:text-slate-100">
                About{' '}
              </span>
              <span className="text-left text-interview-300">Us</span>
            </p>
            <div className="text-xl font-extralight">
              <p className="my-5"> 안녕하세요. 구르는 감자단입니다.</p>
              <p className="my-5">
                아주대 심리학과는 다양한 진로를 선택할 수 있다는 장점이 있는
                만큼, 다양한 선택을 하면서 학과생활을 할 수 있다고 느끼고
                있습니다. 다양한 길과 선택이 있다는 것은 스스로 정해야하는
                미지의 미래가 그만큼 많다는 것이며, 그 미래를 두려워하지 않고
                즐기는 것은 어려운 일이라 생각합니다. 어떠한 선택을 정답이라
                확신하고 나아가는 것만큼 위험한 것은 없지만 그 선택을 두려워하지
                않을 수만 있다면 좋겠다는 생각을 해왔습니다. 우리의 미래를
                위해서 지금 우리가 무엇을 해야하는지, 어떤 수업을 듣고, 어떤
                활동을 해야하는지 늘 고민합니다.
              </p>
              <p className="my-5">
                적어도 우리의 선택에 어떤 경우의 수가 있는지라도 알고 싶었고
                선택의 기반이 될 정보를 많이 알고 싶었습니다. 이 생각의 끝으로
                심리학과 진로의 집단지성을 떠올렸습니다. 학과 생활에 대한 정보와
                함께 각각의 진로에 맞는 추천 커리큘럼/요람을 만들어 누구나
                열람을 할 수 있도록 배포하고자 이 활동을 시작했습니다.
              </p>
              <p className="my-5">
                활동을 하면서 많은 분들의 이야기들을 들을 수 있었고 덕분에
                요람까지 이어질 수 있었던 것 같습니다. 방대한 양의 정보들은
                아니라더라도 하나하나의 소중하디 소중한 이야기를 담았습니다.
                부디 이 이야기의 전달이 도움이 되길 바랍니다. 다만, 이 요람의
                이야기가 유일한 길이며 정답이라고 생각하지 않았으면 좋겠습니다.
                모든 이야기들은 선례일 뿐이며, 새로운 길이 발견될 수도 있습니다.
                이야기를 앞으로의 선택에서 자신에게 더 나은 길을 가기 위한 정보
                습득의 기반으로 바라보았으면합니다.
              </p>
              <p className="my-5">
                이 요람을 시작으로 많은 분들이 진로에 대해서 관심을 갖고 많은
                사람들이 정보를 공유할 수 있는 시발점이 되었으면 좋겠습니다.
              </p>
            </div>
          </section>
          <section className="mt-24">
            <p className="text-5xl font-medium text-left text-neutral-800 dark:text-slate-100">
              License
            </p>
            <div className="text-xl font-extralight">
              <p className="my-4">
                - 본 요람은 아주대학교 심리학과 학우분들의 공익을 위한 목적이
                있었기에 소중한 이야기를 담을 수 있었습니다. 이에, 타대학교 유출
                / 무단수정 / 유료 판매 / 정보 습득 외 행위 등 본 활동 취지와
                어긋나는 행위를 금합니다.
              </p>
              <p className="my-4">
                - 만일 위와 같은 상황이 발생할 시 본 페이지를 폐쇄할 것입니다.
                또한, 필요시 그 이상의 조치를 취할 것입니다.
              </p>
              <p className="my-4">
                - 본 요람의 이야기의 저작권은 각 이야기를 해주신분들께 있으며,
                사진이미지를 제외한 모든 이미지의 저작권은 구르는 감자단에게
                있습니다.
              </p>
              <p className="my-4">
                - 요람과 관련한 이야기는 구르는 감자단의 연락처를 통해서
                전달해주시면 됩니다.
              </p>
              <p>*이메일 : ajoupsybrochure@gmail.com</p>
            </div>
          </section>
          <section className="mt-24">
            <p className="text-5xl font-medium text-left text-neutral-800 dark:text-slate-100">
              Our Members
            </p>
            <div className="flex flex-row flex-wrap mt-8">{MemberLists}</div>
          </section>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  // 살아남기 데이터 경로
  const filePath = path.join(process.cwd(), 'data', 'MemberData.json');
  const MemberData = await fs.readFile(filePath, 'utf8');
  const objectData = JSON.parse(MemberData);

  return {
    props: {
      MemberData: await Promise.all(objectData),
    },
  };
}
