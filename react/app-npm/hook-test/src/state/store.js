/**
 *  전역 상태 관리를 위한 저장소, js
 *      - zustand 모듈 사용
 *      - 시용법
 *          - 1. create 함수를 사용 -> 저장소 생성
 *              - 저장소 생성 시, 상태변수와 액션(함수)를 정의
 */

import {create} from "zustand";

// 1. 저장소 생성 : 객체를 반환하는 콜백함수를 등록
//    set: 콜백함수(내부적 정의)
const useStore = create((set) => ({
    // 상태변수
    count:0,
    
    // 액션 => +1, -1 이 행위만 정의, (+버튼 클릭시 1증가, -버튼 클릭시 1감소)
    // +1 => 기존 상태값에 +1을 하여 새로운 객체 => {...}을 생성하여 대체처리
    increment: () => set((상태값) => ({count:상태값.count + 1})),
    decrement: () => {
       return set((상태값) => {
            return {
                count:상태값.count - 1
            }
       });
    }    
}));

// 2. 대표 모듈화
export default useStore;