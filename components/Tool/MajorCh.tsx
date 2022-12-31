import { useCallback, useState } from 'react';
import { majorChList } from 'data/Data';

export default function career() {
  const [checkedList, setCheckedList] = useState<Array<string>>([]);
  const [notListen, setNotListen] = useState<Array<string>>([]);

  const onCheckedItem = useCallback(
    (checked: boolean, item: string) => {
      setNotListen(majorChList.filter((el) => !checkedList.includes(el)));
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
          <h1 className="text-2xl font-bold">전공 선택</h1>
          {checkedList.length * 3 === 15 ? (
            <h2 className="text-lg my-2">
              👏전공 선택 과목을 모두 들으셨습니다!
            </h2>
          ) : (
            <h2 className="my-2">
              지금까지 들은 전공 선택 학점은 {checkedList.length * 3}
              학점입니다
            </h2>
          )}
          {majorChList.map((item, idx) => {
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
