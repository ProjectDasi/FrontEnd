import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';

interface Step {
  id: string;
  name: string;
  description: string;
}

const steps: Step[] = [
  { id: '01', name: '분석 단계', description: '사용자의 직업선호도, 이력서 및 찜하기 목록 분석' },
  { id: '02', name: '매칭 단계', description: '분석된 사용자 정보와 알맞는 일자리 및 교육과정 공고문 매칭' },
  { id: '03', name: '추천 단계', description: '매칭된 일자리와 교육과정 중 정확도 높은 순으로 추천' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function RecomSteps() {
  return (
    <div className="lg:border-b lg:border-t lg:border-gray-200 GamtanBold">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Progress">
        <ol
          role="list"
          className="overflow-hidden rounded-md lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200"
        >
          {steps.map((step, stepIdx) => (
            <li key={step.id} className="relative overflow-hidden lg:flex-1">
              <div
                className={classNames(
                  stepIdx === 0 ? 'rounded-t-md border-b-0' : '',
                  stepIdx === steps.length - 1 ? 'rounded-b-md border-t-0' : '',
                  'overflow-hidden border border-gray-200 lg:border-0'
                )}
              >
                <div className="group">
                  <span
                    className="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                    aria-hidden="true"
                  />
                  <span
                    className={classNames(
                      stepIdx !== 0 ? 'lg:pl-9' : '',
                      'flex items-start px-6 py-4 text-sm font-medium'
                    )}
                  >
                    <span className="flex-shrink-0">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#6C72C6]">
                        <CheckIcon className="h-6 w-6 text-[#6C72C6]" aria-hidden="true" />
                      </span>
                    </span>
                    <span className="ml-4 flex min-w-0 flex-col">
                      <span className="text-lg">{step.name}</span>
                      <span className="text-base text-gray-500">{step.description}</span>
                    </span>
                  </span>
                </div>

                {stepIdx !== 0 && (
                  <div className="absolute inset-0 left-0 top-0 hidden w-3 lg:block" aria-hidden="true">
                    <svg
                      className="h-full w-full text-gray-300"
                      viewBox="0 0 12 82"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path d="M0.5 0V31L10.5 41L0.5 51V82" stroke="currentcolor" vectorEffect="non-scaling-stroke" />
                    </svg>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
