import { useCallback, useState } from 'react';
import { majorList } from 'data/Data';

export default function career() {
  const [checkedList, setCheckedList] = useState<Array<string>>([]);
  const [notListen, setNotListen] = useState<Array<string>>([]);

  const onCheckedItem = useCallback(
    (checked: boolean, item: string) => {
      setNotListen(majorList.filter((el) => !checkedList.includes(el)));
      if (checked) {
        setCheckedList((prev) => [...prev, item]);
      } else if (!checked) {
        setCheckedList(checkedList.filter((el) => el !== item));
      }
    },
    [checkedList],
  );

  return (
    <>
      <div className="flex-col flex-wrap w-full mb-20">
        <div className="list">
          <h1 className="text-2xl font-bold">전공 필수</h1>
          {checkedList.length * 3 === 27 ? (
            <h2 className="text-lg my-2">
              👏전공 필수 과목을 모두 들으셨습니다!
            </h2>
          ) : (
            <>
              <h2 className="my-2">
                지금까지 들은 전공 필수 학점은 {checkedList.length * 3}
                학점입니다
              </h2>
              <span className="dark:text-slate-400">안 들은 과목 ▶️ </span>
              {notListen.map((el) => (
                <span className="font-medium dark:text-slate-400">
                  {el}
                  {'  '}
                </span>
              ))}
            </>
          )}

          {majorList.map((item, idx) => {
            return (
              <label className="checkboxLabel flex flex-row" key={item}>
                <input
                  type="checkbox"
                  id={item}
                  onChange={(e) => {
                    onCheckedItem(e.target.checked, e.target.id);
                  }}
                />
                <p className="ml-2">{item}</p>
              </label>
            );
          })}
        </div>
      </div>
    </>
  );
}
