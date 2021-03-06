import Container from '@components/container'

const Footer = () => {
    return (
        <footer className="bg-accent-1 border-t border-accent-2">
            <Container>
                <div className="py-28 flex flex-col lg:flex-row items-center">
                    <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
                        Footer
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
