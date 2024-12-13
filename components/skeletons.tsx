import React from "react";

export function EmployeeTableSkeleton() {
  return (
    <div className="min-w-full min-h-screen animate-pulse">
      {/* Search Input and Toggle Button Skeleton */}
      <div className="flex items-center py-1">
        <div className="h-10 w-1/5 bg-gray-300 rounded-md"></div>
        <div className="inline-block p-2 h-10 align-middle ms-4">
          <div className="relative w-11 h-6 bg-gray-300 rounded-full"></div>
          <span className="ms-3 h-5 w-20 bg-gray-300 rounded-md"></span>
        </div>
      </div>

      {/* Table Skeleton */}
      <div className="rounded-md border-y overflow-auto relative scroll-auto">
        {/* Table Header Skeleton */}
        <div className="sticky top-0 z-10 bg-secondary">
          <div className="border-b-1 flex">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className={`h-10 w-1/${10} bg-gray-300 ${
                  index === 0 ? "sticky left-0" : ""
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Table Body Skeleton */}
        <div>
          {Array.from({ length: 10 }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="flex border-b"
            >
              {Array.from({ length: 10 }).map((_, colIndex) => (
                <div
                  key={colIndex}
                  className={`h-10 w-1/${10} bg-gray-200 ${
                    colIndex === 0 ? "sticky left-0" : ""
                  }`}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function JobTableSkeleton() {
  return (
    <div className="min-w-full min-h-screen animate-pulse">
      {/* Search Input and Toggle Button Skeleton */}
      <div className="flex items-center py-1">
        <div className="h-10 w-1/5 bg-gray-300 rounded-md"></div>
      </div>

      {/* Table Skeleton */}
      <div className="rounded-md border-y overflow-auto relative scroll-auto">
        {/* Table Header Skeleton */}
        <div className="sticky top-0 z-10 bg-secondary">
          <div className="border-b-1 flex">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className={`h-10 w-1/${10} bg-gray-300 ${
                  index === 0 ? "sticky left-0" : ""
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Table Body Skeleton */}
        <div>
          {Array.from({ length: 10 }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="flex border-b"
            >
              {Array.from({ length: 10 }).map((_, colIndex) => (
                <div
                  key={colIndex}
                  className={`h-10 w-1/${10} bg-gray-200 ${
                    colIndex === 0 ? "sticky left-0" : ""
                  }`}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
