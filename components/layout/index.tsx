import Header from './header';
import Footer from './footer';
import ScrollToTop from 'shared/utils/scrollToTop';
// 모든 레이아웃을 넣을거래

type childrenType = {
  children?: React.ReactNode;
};

export default function layout({ children }: childrenType) {
  return (
    <div className="bg-primary">
      <ScrollToTop />
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
