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
          <h1 className="text-2xl font-bold">μ κ³΅ νμ</h1>
          {checkedList.length * 3 === 27 ? (
            <h2 className="text-2xl my-2">
              πμ κ³΅ νμ κ³Όλͺ©μ λͺ¨λ λ€μΌμ¨μ΅λλ€!
            </h2>
          ) : (
            <>
              <h2 className="my-2">
                μ§κΈκΉμ§ λ€μ μ κ³΅ νμ νμ μ {checkedList.length * 3}
                νμ μλλ€
              </h2>
              <span className="dark:text-slate-400">μ λ€μ κ³Όλͺ© βΆοΈ </span>
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
