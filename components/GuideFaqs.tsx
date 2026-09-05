type Question = { name: string; acceptedAnswer: { text: string } }

export default function GuideFaqs({ questions }: { questions: Question[] }) {
  return (
    <section className="bg-cream-light py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-6 sm:px-10">
        <h2 className="font-serif text-charcoal text-3xl sm:text-4xl mb-6">Common questions.</h2>
        {questions.map((question) => (
          <details key={question.name} className="border-b border-charcoal/10 py-5">
            <summary className="cursor-pointer text-base font-medium text-charcoal">{question.name}</summary>
            <p className="mt-3 text-base leading-relaxed text-warm">{question.acceptedAnswer.text}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
