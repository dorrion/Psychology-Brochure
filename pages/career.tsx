import { majorList } from 'data/Data';
import { useCallback, useState } from 'react';

export default function career() {
  const [checkedList, setCheckedList] = useState<Array<string>>([]);

  const onCheckedItem = useCallback(
    (checked: boolean, item: string) => {
      if (checked) {
        setCheckedList((prev) => [...prev, item]);
      } else if (!checked) {
        setCheckedList(checkedList.filter((el) => el !== item));
      }
    },
    [checkedList],
  );
  console.log(checkedList);
  return (
    <>
      <div className="list">
        {majorList.map((item, idx) => {
          return (
            <label className="checkboxLabel flex flex-row" key={item.name}>
              <input
                type="checkbox"
                id={item.name}
                onChange={(e) => {
                  onCheckedItem(e.target.checked, e.target.id);
                }}
              />
              <div>{item.name}</div>
            </label>
          );
        })}
      </div>
      <div>네 놈이 들은 과목은 {checkedList}이다</div>

      {checkedList.length * 3 === 27 ? (
        <div>네 놈은 전공을 다 들었구나</div>
      ) : (
        <div>네 놈이 들은 전공학점은 {checkedList.length * 3}학점이다</div>
      )}
    </>
  );
}
