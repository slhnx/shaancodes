import QuoteCard from "../quote-card";

const Quote = () => {
  return (
    <div className="w-[90%] lg:w-[85%] xl:w-1/2 mx-auto mb-8">
      <QuoteCard
        author="Shah Rukh Khan"
        quote="You have to be hungry for your work. Comfort kills creativity."
        delay={0.9}
      />
    </div>
  );
};

export default Quote;
