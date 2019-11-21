import React from 'react'
import ReactTypingEffect from 'react-typing-effect';

export default function Header() {
    // const ReactTypingEffectDemo = () => {
    //     return (
    //       <ReactTypingEffect
    //         text="How are you today?" //text=["Hello.", "World!"]
    //       />
    //     );
    //   };
    return (
        <div>
            <header class="masthead">
                <div class="container d-flex h-100 align-items-center">
                    <div class="mx-auto text-center">
                        {/* <h1>Hi! How are you today?</h1> */}
                        <ReactTypingEffect
                            text="Hi! Nice to see you?, " //text=["Hello.", "World!"]
                        />
                        );
                      };
                        <h2 class="text-white-50 mx-auto mt-2 mb-5">Welcome to my Portfolio</h2>
                        <a href="#about" class="btn btn-primary js-scroll-trigger">Get Started</a>
                    </div>
                </div>
            </header>
        </div>
    )
}
