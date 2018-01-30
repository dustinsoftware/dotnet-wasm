using System;
using System.Collections;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using Mono.WebAssembly;

// This code was thrown together in a hurry, please don't judge me...
public class Program {
    private static List<string> _list = new List<string>();

    public static void Main() {
        AddToList("The first list item");
        UpdateOutput();
        Benchmark(null);
    }

    public static bool AddToList(string input)
    {
        _list.Add(input);
        UpdateOutput();
        return true;
    }

    public static void UpdateOutput()
    {
        string outputString = $"Hello from C#!! .NET Environment version {Environment.Version}. The todo list has {_list.Count} items. ";
        foreach (string item in _list.ToArray())
            outputString += item + ",";

        HtmlInteropTest(outputString);
    }

    public static void Benchmark(string argument)
    {
        if (argument == null)
            return;

        // http://jonskeet.uk/csharp/benchmark.html
        ArrayList al = new ArrayList();
        for (int i = 0; i < int.Parse(argument); i++)
            al.Add("hello");
        HtmlInteropTest("Benchmark done");
    }

    // https://github.com/lrz/mono-wasm-mono/tree/master/mcs/class/corlib/Mono.WebAssembly
    public static bool HtmlInteropTest(string output)
    {
        Console.WriteLine(output);
        HtmlPage.Document.GetElementById("output").InnerText = output;
        return true;
    }
}
