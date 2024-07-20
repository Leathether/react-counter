

type sectionProps = {
    title?: string,
    childern?: string
}

export const Section = ({childern = "hello", title = "My Subheading"}: sectionProps) => {
    return (<>
        <section>
            <h2>{title}</h2>
            <p>{childern}</p>
        </section>
        </>
        
    )
}