import EnglishCard from './EnglishCard';

export default function English() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flexBox flex-col">
          <h1 className="text-4xl font-bold  text-center">외국어 공인 성적</h1>
          <div className="flex-row flexBox mt-16">
            <EnglishCard english="TOEIC" score="730" />
            <EnglishCard english="TEPS" score="329" />
            <EnglishCard english="TOEFL" score="" />
            <EnglishCard english="G-TELP" score="Level2 67 Level3 89" />
            <EnglishCard english="TOEIC Speaking" score="Level6" />
            <EnglishCard english="OPic" score="IM" />
            <EnglishCard english="IELTS" score="5.5" />
          </div>
        </div>
      </section>
    </>
  );
}
