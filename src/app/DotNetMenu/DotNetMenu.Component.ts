import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

const features = `
    'MVC | ASP.NET | .NET',
    'MVC',
    '--- ASP.NET Core',
    '--- ASP.NET',
    '------ Blazor',
    '.NET',
    '--- DotNet Core',
    '--- DotNet 6',
    '--- Web API',
    'EF (Entity Framework)',
    'LINQ',
    'C#',
    'C# versions'
`;

const subTopics = [
  ['MVC | ASP.NET | .NET',
    'MVC',
    '--- ASP.NET Core',
    '--- ASP.NET',  
    'DotNet',
    '--- .NET Core',
    '--- .NET'
  ],
  ['MVC'],
  ['--- ASP.NET Core'],
  ['--- ASP.NET'],
  ['Web API',
     '--- API for the Web',
     '--- lightweight-architecture',
     '------- ASP.NET via AJAX',
     '---------- JavaScipt',
     '------- HTTP',
     '---------- smartphone| tablets'
  ],
  [`Blazor - combination of Browser + Razor
    <br/>--- framework lets developers build 
    <br/>------ interactive Web APIs
    <br/>------ Reusable Web UI Components
    <br/>---------- using C# to share code and libraries
    <br/>---------------- Both Client and Server
  `,
  `--- interactive Web APIs
  
  `,
  `-------- Reusable Web UI Components
  
  
  `,
   `------------ C#
   
   `,
   `------- Both Client and Server  
   
   `
  ],
  ['Razor - '],
  
  ['.Net',
    '--- runtime', 
    '-------  CLR',
    '----------- Managed Code',
    '--- SDK',
    '------ Razor -'
  ],
  ['DotNet Core',
  '--- 2.0 - C# 7.3',
  '--- 3.0 - C# 8.0',  
  ],
  ['DotNet',
  '--- 5.0 - C# 9.0',
  '--- 6.0 - C# 10.0',
  '--- 7.0 - C# 11.0', 
  ],
  ['EF (Entity Framework)',
    '--- ORM',
    '---- Object DB - .NET Mapper',
    '------ LINQ Queries',
    '------ Change tracking',
    '------ Updates & schema migration',
    ' -- ',
    '---- EF Core DBs',
    '------ SQL DB (on premises | azure)',
    '------ SQLite',
    '------ MySQL',
    '------ PostGreSQL',
    '------ Azure Cosmos DB'
   ],
   ['LINQ'],
  ['C#'],
  ['C# versions',
  ' - ', 
  'C# 1',
  '--- C# 1 - Features',
  ' -- ', 
  'C# 2',
  '--- C# 2 - Features',
  ' -- ', 
  'C# 3',
  '--- C# 3 - Features',
 ' -- ', 
  'C# 4',
  '--- C# 4 - Features',
  ' -- ', 
  'C# 5 .Net Core 2',
  '--- C# 5 - Features',
  ' -- ', 
  'C# 6',  
  '--- C# 6 - Features',
 ' -- ', 
  'C# 7.3 - .Net Core 2',  
  '--- C# 7.3 - Features',
  ' -- ', 
  'C# 8 - .Net Core 3', 
  '--- C# 8 - Features',
  ' -- ',
  'C# 9  - .Net 5', 
  '--- C# 9 - Features',
  ' -- ', 
  'C# 10 - .Net 6',
  '--- C# 10 - Features',
  ' -- ', 
  'C# 11 - .Net 7',
  '--- C# 11 - Features',
  ],
  ['Torch backend',
  '--- TorchServe',  
  '------ PyTorch',
   '--- TensorFlow'
  ],
  ['Machine Learning',
  '--- AI',
  '--- 3 types of ML'
  ]
];

const subTopicsInfo = [
   [
  `MVC (Model View Controller) 
    <br/>--- how to deliver webpage from server to client
    `,
    `--- ASP.NET MVC is a web framework based on MVC architecture
    <br/>----- part of .NET allowing building dyn web appns 
    `,
    `--- ASP.NET Core is a Cloud environment for development + deployments
    <br/>-----
    `,
    `--- .NET - is a blanket term for
      <br/>----- .NET Framework - 
      <br/>----- CLR (Common Language Runtime) 
      <br/>------ to run .NET assemblies
  `,
  `----- Blazor
  
  `,
  `----- Razor - .NET HTML View Generating Engine
  <br/>-------- based on C# (used on most ASP.NET Web pages)
  <br/>-------- (or VB)
  <br/>------------ use @ starts inline expressions | single blocks| multi-statement blocks)
  `,
  `https://docs.microsoft.com/en-us/aspnet/web-pages/overview/getting-started/introducing-razor-syntax-c`
],
 [`MVC - (Model View Controller) -
   
   
`],
 [`ASP.NET - Core`

 ], 
 [`ASP.NET - `

 ], 
  ['Web API',
     '--- API for the Web',
     '--- lightweight-architecture',
     '------- ASP.NET via AJAX',
     '---------- JavaScipt',
     '------- HTTP',
     '---------- smartphone| tablets'
  ],  
  ['Blazor',
  '--- interactive Web APIs',
  '-------- Reusable Web UI Components',
   '------------ C#',
   '------- Both Client and Server  '
  ],
  [`Razor - 
  
  `
  ],
  [
  `.NET -  includes the runtime and SDK 
  <br/>--- .NET runtime
  <br/>------ CLR (Common Language Runtime)
  <br/>---------- Managed Code  
  <br/>
  <br/>---- SDK
  <br/>------- .Net runtime -
  <br/>------- creates .NET appns + libraries-     
  `,
  `--- .NET runtime 
    <br/>----- is used to run a .NET app 
    <br/>-------- compilers must emit metadata 
    <br/>------------ describing types| members| refs in code
      <br/>------------- (may or maynot be included in app)
    <br/>----- always installed with the SDK
    `, 
    `------ metadata - is stored with Code 
    <br/>---- runtime uses it 
    <br/>------ to locate + load classes
    <br/>------ layout instances instances in memory
    <br/>------ resolve method invocations
    <br/>------ generate native code 
    <br/>------ enforce security
    <br/>------ set run-time context boundaries
    `,
    `-------- auto handles object layout + manages refs to Objects
    <br/>--------- Objects - called managed data 
    <br/>--------- GC (Garbage Collection) - eliminates memory leaks + other prog errors
    <br/>--------- 
    `,
    `----- (every loadable (PE - Portable Executable) file contains metadata
    <br/>------   
    `,
    `------ CLR (Common Language Runtime)
    <br/>-------- DotNet's runtime environment   
    <br/>-------- runs the code and provides services that simplify development
    <br/>
    <br/>-------- Compiler's and Tools expose the CLR ftns 
    <br/>------------ that let you write code using envt
    <br/>------------ Code targetting runtime = Managed Code
    `,
    `------------ Managed Code
    <br/>----------- code targeting runtime 
    <br/>------------ features - 
    <br/>---------------- Cross language integration 
    <br/>---------------- Cross language exception handling 
    <br/>---------------- Enhanced security   
    <br/>---------------- Versioning 
    <br/>---------------- Deployment support
    <br/>----
    <br/>------------ can use managed data| unmanaged data| or both
    <br/>
    <br/>------------- Simplified model for 
    <br/>---------------- Component Interaction
    <br/>---------------- Debugging + Profiling services
    `,
    `------ Advantages
    <br/>/-------- Performance improvements
    <br/>-------- Easily use components devd in other langs 
    <br/>-------- Extensbile types provided by class library
    <br/>-------- Lang features - Inheritance | interfaces| overloading for OOP
    <br/>-------- Support for explicit free threading for MT scalable apps
    <br/>-------- Support for structured exception handling
    <br/>-------- Support for custom attributes
    <br/>-------- GC
    <br/>-------- Use of delegates instead of ftn pointers 
    <br/>----------- for increased type safety + security   
    <br/>------------- CTS (Common Type Safety)
    `,
    `----------------- CTS (Common Type System)
      <br/>---------------- defines how types are declared | used | managed in CLR 
      <br/>-------------------- important part of X-language integration
      <br/>----------------- Establishes a frameework helps X-lang integration | type safety| High Perf
      <br/>----------------- Provides an OOP Model - that supports complete impn of many prog languages
      <br/>----------------- Defines rules that langs must follow
      <br/>----------------- Provides a library that contains the primitive data types 
      `,
      `--------------------- CTS - has 5 types
       <br/> ------------------------ Classes
       <br/> ------------------------ Structures
       <br/> ------------------------ Enumerations - inherits directly from System.Enum 
       <br/> ------------------------ Interfaces
       <br/> ------------------------ Delegates (like ftn pointers) for event handlers + cb ftns
       <br/> --------------------------- are secure | varifiable | type safe
       <br/> --------------------------- can rep any instance or static method that has a complete signature
      `,
      `--- .NET SDK
        <br/>---- lets you create DotNet apps + libraries
        <br/>---- .NET Runtime is always installed with the SDK    
`],

  [`DotNet Core -  (introduced in 2014 x platform successor to .NET Framework)
  <br/>-- compatible with .NET framework - .NET 3.1 - 
  <br/>
  <br/>-- next version .NET 5  
  <br/>-- is used to create server appns that run on Windows | Linux | Mac
  <br/>
  <br/>-- Developers can write appns | libraries in C# | VB.NET | F# in both runtimes 
  <br/>
  <br/>-- Cannot write desktop with UI 
  <br/>--- 
  <br/>--- 
  <br/>--- 
  `],
  [
    `DotNet 6
    <br/>-- unifies the SDK | base libraries| runtime 
    <br/>---- across mobile | desktop | IoT | Cloud apps
    <br/>
    <br/>-- also simplified devt | better performance | ultimate productivity 
    <br/>
    <br/>-- Performance Improvements
    <br/>---- FileStream - System.IO.FileStream - rewritten
    <br/>---- profile guided optimization 
    <br/>---- AOT Compilation 
    <br/>
    <br/>-- Crossgen2 - provides AOT Compilation - to improve startup time of appn
     <br/>---- written in C# (not C++)- performs analysis + optimization
     <br/>
     <br/>-- ARM64 support
     <br/>
     <br/>-- Hot Reload - lets you modify source code   
     <br/>---- and instantly apply those changes to running app and see display in UI display
     <br/>
     <br/>-- .NET MAUI support - desktop | mobile with 1 source code
     <br/>
    `], 
    [`EF (Entity Framework) -
      <br/>--- lets developers work with data as domain specific objects + properties 
      <br/>------ eg Customers | Customer addresses
      <br/>--- (without having to rely on underlying db tables + columns)
      `,
      `--- ORM (Object Relational Mapper) - 
        <br/>----- helps you to abstract diff types of DBs 
        <br/>------- and helps query objects (instead of SQL strings)  
      `,
      `--- Object DB - .NET Mapper
      
      `,
      `------ LINQ Queries
      
      `,
            
      ' -- ',

      `------ Change tracking
      
      `,
      ' -- ',
      `------ Updates & schema migration
      
      `,
      ' -- ',
      `- 2 types of Entities (custom data classes) + data model
      <br/>----- POCO Entities
      <br/>----- Dynamic Proxy 
      `,
       `- EF API
        <br/>---- EF6
        <br/>---- EF Core
       `,
      `---- EF Core DBs
      `,
      '------ SQL DB (on premises | azure)',
      '------ SQLite',
      '------ MySQL',
      '------ PostGreSQL',
      '------ Azure Cosmos DB'
      ],
      [`LINQ - 
    
    `],
      [`C# - modern OOP (Object Oriented Programming) Language
      <br/>-- is also Type safe - to build secure | robust appns  
      <br/>---- that run in .NET
      `], 
      [
     'C# versions',
    ' -- ',
   `C# 1.1 / 1.2 - (Dec 2002)
    <br/>--- 
    <br/>--- 
    <br/>--- 
  `,
  `C# 1 - Features
  <br/>--- 
  <br/>--- 
  <br/>--- 
  `,
  ' -- ', 
  `C# 2 - (June 2006)
  <br/>--- 
  <br/>--- 
  <br/>--- 
  `,
  `C# 2 - Features
  <br/>--- 
  <br/>--- 
  <br/>--- 
  `,
  ' -- ', 
 `C# 3 - (Nov 2007)
 <br/>--- 
 <br/>--- 
 <br/>--- 
 `, 
 `C# 3 - Features
 <br/>--- 
 <br/>--- 
 <br/>--- 
 `,
 ' -- ', 
  `C# 4 - (April 2010)
  <br/>--- 
  <br/>--- 
  <br/>--- 
  `,
  `C# 4 - Features',
 <br/>--- 
 <br/>--- 
 <br/>--- 
 `,
  ' -- ', 
  `C# 5 - (Aug 2012 - VS 2012) 
  <br/>--- 
  <br/>--- 
  <br/>--- 
`,
`C# 5 - Features
 <br/>--- 
 <br/>--- 
 <br/>--- 
 `,

' -- ',
`C# 6 - (July 2015 - VS 2015) 
<br/>--- 
<br/>--- 
<br/>--- 
<br/>--- 
<br/>--- 
`,
`C# 6 - Features
<br/>
 <br/>--- Static Imports  
 <br/>--- Exception Filters
 <br/>--- Auto property initialisers
 <br/>--- Expn based members
 <br/>--- Null propagator
 <br/>--- String interpolation
 <br/>--- nameof operator
 <br/>--- index initializers
 <br/>--- Await in Catch finally blocks
 <br/>--- Default values for getter only properties
 `,
' -- ', 
`C# 7.3 - (Mar 2017 - .Net Core 2 - VS 2017) 
<br/>--- 
<br/>--- 
<br/>--- 
<br/>--- 
<br/>--- 
<br/>---
 `,
 `C# 7 - Features
 <br/>
 <br/>--- Out variables
 <br/>--- Tuples and desconstruction
 <br/>--- Pattern matching
 <br/>--- Local ftns
 <br/>--- Expanded expression bodied members
 <br/>--- Ref locals and returns
 <br/>- 
 <br/>--- Discards
 <br/>--- Binary literals and Digit separators
 <br/>--- Throw expressions
 `,
  ' -- ', 
 `C# 8 - (Sept 2019 - .Net Core 3 - VS 2020 - major release - targets .NET Core) 
 <br/>---  Features rely on CLR () capabilities   
 <br/>--- others library types dept on .NET Core 
 <br/>--- 
 <br/>--- 
 <br/>--- 
 <br/>--- 
 `,
 `C#8 - Features
 <br/>
 <br/>--- Readonly members
 <br/>--- Default interface methods
 <br/>--- More patterns in more places
 <br/>--- Using declarations
 <br/>--- Static local ftns
 <br/>--- Disposable ref structs
 <br/>--- Nullable reference types
 <br/>--- Asynchronous streams
 <br/>--- Asynchronous disposable
 <br/>--- Indices and ranges
 <br/>--- Null caalescenet assignment
 <br/>--- Unmanaged constructed types
 <br/>--- Stackalloc in nested expressions  
 <br/>--- Enhancement of interpolated verbatim strings
 `,
 ' -- ', 
 `C# 9 - (Nov 2020 - .NET 5) 
 <br/>---
 <br/>---
 <br/>--- 
 <br/>--- 
 <br/>--- 
 <br/>---   

 `,
 `C#9 - Features
 <br/>
 <br/>--- Records
 <br/>--- Init only setters
 <br/>--- Top level statements
 <br/>--- Pattern matching enhancements
 <br/>--- Performance and interop
 <br/>------- Native sized integers
 <br/>------- Function pointers
 <br/>------- Suppress emitting localsinit flag 
 <br/>--- Fit and finish features
 <br/>------- Target typed new expressions 
 <br/>------- Static anonymous functions
 <br/>------- Target typed conditional expressions
 <br/>------- Covariant return types
 <br/>------- Extension GetEnumerator support foreach loops 
 <br/>------- Lambda discard parameters
 <br/>------- attributes on local ftns 
 <br/>--- Support for coe generators
 <br/>------- Module initializers 
 <br/>------- new features for partial methods
 <br/>--- Warning wave 5
 `,
 ' -- ',  
 `C# 10 - (Nov 2021 - .Net 6 - VS 2022)
 <br/>--- 
 <br/>--- 
 `,
 `C# 10 - Features
  <br/>
  <br/>--- Record structs 
 <br/>--- Improvements of structure types
 <br/>--- Interpolated string handlers
 <br/>--- Globral string handlers
 <br/>--- File scoped namespace declarations
 <br/>--- Extended property patterns
 <br/>--- Improvements on lambda expressions  
 <br/>--- Allow const interpolated strings  
 <br/>--- Record types can seal ToString()  
 <br/>--- Improved definite assignment
 <br/>--- Allow both assignment| declaration in same deconstn
 <br/>--- Allow AsyncMethodBuilder attribute on methods
 <br/>--- CallerArgumentExpression attribute
 <br/>--- Enhanced #line pragma
<br/>---  Warning wave 6
<br/>--- 
<br/>--- 
<br/>---    
`,
 ' -- ',
 `C# 11 - (Nov 2022 - .Net 7)
 <br/>--- 
 <br/>--- 
 `,
 `C# 11 - Features
 <br/>--- etc.
  `],
  [`Torch backend
  <br/>--- torch.backend - 
  <br/>------ controls the behavior of various backends that PyTorch supports
  <br/>------ Backends include
  <br/>---------- torch.backends.cuda
  <br/>---------- torch.backends.cudnn 
  <br/>---------- torch.backends.mkl 
  <br/>---------- torch.backends.mkldnn 
  <br/>---------- torch.backends.openmp
  
  `,
  `--- TorchServe by PyTorch
  <br/>------ is a flexible tool for serving deep learning models 
  <br/>----------- that have been exported from PyTorch  
  <br/>------ comes pre-installed with Deep Learning AMI with Conda (v34)
  <br/>
  <br/>------ is an OS model serving framework for PyTorch 
  <br/>---------- that makes it easy to deploy trained PyTorch models
  <br/>---------- performantly at scale without writing code     
  <br/>
  <br/>------ is a performant, flexible and easy to use tool
  <br/>---------- for serving PyTorch eager mode and torschripted models 
  <br/>
  <br/>------ can be used for many types of inference in production settings
  <br/>---------- It provides an easy to use CLI + utilizes REST based APIs 
  <br/>---------- to handle state protection requests   
  <br/>
  <br/>------ takes a PyTorch deep learning model 
  <br/>---------- and it wraps it in a set of REST APIs 
  <br/>---------- Comes with a built in web-server you run from CLI
  <br/>------------- CLI call takes in 1 or multiple models you want to serve
  <br/>------------- + optional parameters controlling port | host | logging  
  <br/>------ supports running custom services to handle inference handling logic          
  <br/>
  <br/>------ delivers lightweight serving with low latency 
  <br/>------------- so you can deploy 
  `,
  `------ PyTorch - developed and us  ed at Facebook  
  <br/>------ is one of the most popular libraries for deep learning
  <br/>---------- Deep Learning uses artificial Neural Networks (models)
  <br/>---------- which are computing systems comprising many layers of interconnected units  
  <br/>------
  <br/>------ is an open source ML framework 
  <br/>------ that accelerates the path 
  <br/>------------ from research prototyping 
  <br/>------------ to production deployment
  <br/>
  <br/>------ based on 
  <br/>------------ the Python lang 
  <br/>------------------- Tensor computation - 
  <br/>------------------- Deep neural networks built
  <br/>------------ and the Torch library
  <br/>
  <br/>------ uses modules to rep neural networks 
  <br/>----------- building blocks of stateful compn
  <br/>----------- provides a robust library of modules + custom modules
  <br/>-------------- multi-layer neural networks
  <br/>
  <br/>------ developed TorchServe  
  <br/>
  <br/>
  `,
  `--- PyTorch nn (Neural network) - nn package
  <br/>----- defines a set of Modules (a NN layer)
  <br/>
  `,
  `-------- nn.ReLU (Rectified Linear Unit)
  <br/>----------- relu1 = nn.ReLU(inplace=False)
  `,
  `-------- PyTorch lightning -
  <br/>----------- is built on top of PyTorch
  <br/>---------------- provides a research framework 
  <br/>---------------- allows for fast experimentation and scalability 
  <br/>-------------------- via an OOP approach 
  `,
  
  `--- TensorFlow
  <br/>------ is better for visualization 
  <br/>----------- debug better and track training process
  <br/>------ better at deploying trained models to production
  <br/>----------- due to TensorFlow Serving framework
  <br/>---------------- that produces output from input   
  `,

 ],
 [`Machine Learning (ML) - 
 <br/>--- is a type of AI (artificial intellicense)
 <br/>--- that allows S/W appns to become more accurate 
 <br/>--- at predicting outcomes 
 <br/>-------- (without being explicitely programmed to do so)
 <br/>
 <br/>--- algorithms use historical data as input 
 <br/>-------- to predict new output values   
 <br/>
 <br/>--- machines should be able to learn and adapt via experience  
 <br/>------- AI - is a broader idea where machine executes tasks smartly 
 <br/>    
 <br/>
 `,
 `--- AI (Artificial Intelligence)
 <br/>---- is a broader idea where machine executes tasks smartly 
 `,
  `--- 3 types of ML (Machine Learning)
  <br/>------- 1: Supervised learning
  <br/>------- 2: Unservised learning
  <br/>------- 3: Reinforcement learning
  
  `,
  `--- Neural network
  <br/>------ 
  `,
  `------ 3 types of Neural networks
  <br/>----------- 1: Artificial NN (ANN)
  <br/>----------- 2: Convolution NN (CNN) 
  <br/>----------- 3: Recurrent NN (RNN)
  `  
]
];

@Component({
  selector: 'app-dotnet-menu',
  templateUrl: './DotNetMenu.component.html',
  styleUrls: ['./DotNetMenu.component.scss']
})
export class DotNetMenuComponent implements OnInit {
  
  isScreenSmall = false;

  dotnet_list = of(features.split(','));
  dotnet_sublist = subTopics; // gives indiv arrays
  
  dotnet_strArr: string[] = [];
  dotnet_subStrArr: string[6][] = [];
  
  dotnetFeatureIndex = 0;
  dotnetFeatureSubIndex = 0;

  dotnetInfo: string = ``;

  constructor() { }

  ngOnInit(): void {
      console.log('ngOnInit()');
      let arr = this.dotnet_sublist;
  }

  getInfo(i: number, j: number){
      this.dotnetInfo = subTopicsInfo[i][j];       
      this.dotnetFeatureSubIndex = j;
  }

  removeQuote(str: string): string{
      return str.replace(/'/g,'');
  }

  showDotNetFeatures(inx: number){
      this.dotnetFeatureIndex = inx;
      this.getInfo(inx, 0);
  }
}
