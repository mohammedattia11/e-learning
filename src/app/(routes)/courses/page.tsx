import CoursesList from "@/components/courses-list";
import Image from "next/image";

export default function CoursesPage() {
  return (
    <div>
      <div className="relative">
        <Image
          src="/course-banner.gif"
          alt="course-banner"
          width={1200}
          height={300}
          className="w-full h-96 object-cover"
        />
        <div className="absolute bg-linear-to-r from-black/80 to-white-50/50 top-0 h-full pt-24 px-10 md:px-24 lg:px-36 capitalize">
          <h2 className="text-6xl font-game">explore all courses</h2>
          <p className="font-game text-3xl">
            explore all courses and enroll to learn and increase your skills
          </p>
        </div>
      </div>
      <div className="mt-8 px-10 md:px-24 lg:px-36">
        <h2 className="font-game capitalize text-4xl ">all courses</h2>
        <CoursesList />
      </div>
    </div>
  );
}
