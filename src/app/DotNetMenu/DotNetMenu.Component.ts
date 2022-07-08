import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

const features =`
    '.NET', 
    'DotNet Core',
    'DotNet 6',
    'C#',
    'C# versions'
`;

const subTopics = [
  ['.Net',
    '--- runtime', 
    '-------  CLR',
    '----------- Managed Code',
    '--- SDK',
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
  ]
];

const subTopicsInfo = [
  [`.NET -  includes the runtime and SDK 
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
    `------ Advantages - 
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
  `
],
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
  [
     `C# - modern OOP (Object Oriented Programming) Language
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
