const LearningContent = (props) => {
  return (
    <>
      <div className="lg:w-96 w-72 h-16 absolute -top-7 left-1/2 -translate-x-1/2 bg-cover bg-center flex justify-center items-center bg-[#F2BA70] rounded-full shadow-lg">
        <span className="lg:text-3xl text-2xl text-[#622E2A] uppercase">
          {props.title}
        </span>
      </div>

      <div className="overflow-y-scroll mt-8 relative flex flex-wrap h-[55vh] overflow-hidden">
        {props.children}
      </div>
    </>
  );
};

export default LearningContent;
