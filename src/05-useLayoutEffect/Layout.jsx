
import { useFetch, useCounter } from "../hooks/hooks_index";
import { LoadingQuote, Quote } from "../03-examples/03-example_index";

export const Layout = () => {
    const { counter, increment } = useCounter(1);

    /*
    Pagina web a buscar direccion de quotes:
    https://breakingbadquotes.xyz/
    */
   
    const { data, isLoading, hasError } = useFetch(
      `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
    );
  
    const { quote, author } = !!data && data[0];
  
    return (
      <>
        <h1>BreakingBad Quotes</h1>
        <hr />
  
        {
        isLoading 
        ? <LoadingQuote /> 
        : <Quote author={author} quote={quote} />
        }
  
        <button
          className="btn btn-primary"
          disabled={isLoading}
          onClick={() => increment()}
        >
          Next quote
        </button>
      </>
    );
  };
