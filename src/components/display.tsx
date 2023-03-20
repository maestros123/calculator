export const Display = ({ result }: {result: string}) => {

    return (
        <div className='container'>
            <div className="field" style={{ fontSize: result.length < 10 ? '36px' : '22px' }}>{result}</div>
        </div>
    )
}
