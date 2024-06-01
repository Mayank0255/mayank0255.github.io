---
title: "A Functional Treatment of the Direct Product of Groups"
description: "Redefining the direct product of groups, up to group-theoretic isomorphism"
categories: [abstract algebra]
tags: [direct products, function spaces]
---

## Definition of direct products

Let $$A$$ be an arbitrary *well-ordered* set and $$\{ G_{\alpha} \vert \alpha \in A \}$$ a set of groups under the operations $$\{ *_{\alpha} \vert \alpha \in A \}$$ respectively,

$$\forall \: \alpha \in A : *_{\alpha} \in \left( G_{\alpha} \right)^{G_{\alpha} \times G_{\alpha}}$$

One way to define the direct product of these groups is via the standard Cartesian product,

The direct product of the entries of $$(G_{\alpha} \vert \alpha \in A)$$ for well-ordered set $$A$$ is the set,

$$\prod_{\alpha \in A} G_\alpha = \left\{ \left( a_{\alpha} \right)_{\alpha \in A} \middle\vert \forall \: \alpha \in A : a_{\alpha} \in G_{\alpha} \right\}$$

equipped with the *symmetric* group operation $$\displaystyle{* : \prod_{\alpha \in A} G_\alpha \times \prod_{\alpha \in A} G_\alpha \to \prod_{\alpha \in A} G_\alpha}$$,

$$\forall \: a, b \in \prod_{\alpha \in A} G_\alpha : a * b = (a_{\alpha} *_{\alpha} b_{\alpha} \vert \alpha \in A)$$

## Isomorphisms

Let $$\cong_{\text{Set}}$$ denote **set-theoretic isomorphism** i.e. isomorphism in the category $$\text{Set}$$, which is equivalence of sets under bijective *maps*.[^1] In general, let $$\cong_C$$ denote isomorphism in a small category $$C$$ i.e. one in the category $$\text{Cat}$$. 

[^1]: in the plural, as if $$f \in B^A$$ is a bijection, so are all the elements in $$\displaystyle{\left\{ \underset{% raw %}{{f \in U}}{% endraw %}{\bigcirc} f \middle\vert U \in \mathcal{P} \left( B^A \right) \right\}}$$ where $$\bigcirc$$ is recursive composition. For an infinite set of functions, one would use *transfinite composition* in the sense of category theory.

Then, in the category $$\text{Grp}$$ of groups, by definition,

$$(G, *_{G}) \cong_{\text{Grp}} (H, *_{H}) \iff \left[ G \overset{\varphi : G \to H}{\cong_{\text{Set}}} H \right] \land \left[ \forall \: u, v \in G : \varphi(u *_{G} v) = \varphi(u) *_{H} \varphi(v) \right]$$

## Functional construction of direct products

### Statement

We want to prove that the [group-theoretic direct product](#definition-of-direct-products) is group-isomorphic to the following one,

$$G = \left\{ f \in \left( \bigcup_{\alpha \in A} G_{\alpha} \right)^{A} \middle\vert \forall \: \alpha \in A : f(\alpha) \in G_{\alpha} \right\}$$

when equipped with the binary operation $$\displaystyle{*_{G}} : \left( \bigcup_{\alpha \in A} G_{\alpha} \right)^{A} \times \left( \bigcup_{\alpha \in A} G_{\alpha} \right)^{A} \to \left( \bigcup_{\alpha \in A} G_{\alpha} \right)^{A}$$,

$$\forall \: f, g \in G : f *_{G} g = f \circ g$$

i.e.,

$$\left( \prod_{\alpha \in A} G_{\alpha}, * \right) \cong_{\text{Grp}} (G, *_{G})$$

### Proof

The [conditions for the group isomorphism](#isomorphisms) of the above groups are satisfied as follows:

- As per the definition of direct products,

$$
\begin{align*}
\prod_{\alpha \in A} G_\alpha & = \left\{ (a_{\alpha})_{\alpha \in A} \middle\vert \forall \: \alpha \in A : a_{\alpha} \in G_{\alpha} \right\} \\
& = \left\{ (f(\alpha))_{\alpha \in A} \middle\vert f \in \left( \bigcup_{\alpha \in A} G_{\alpha} \right)^{A}, \forall \: \alpha \in A : f(\alpha) \in G_{\alpha} \right\} \\
& \overset{\varphi}{\cong_{\text{Set}}} \left\{ \text{im}_{f}(A) \middle\vert f \in \left(\bigcup_{\alpha \in A} G_{\alpha} \right)^{A}, \forall \: \alpha \in A : f(\alpha) \in G_{\alpha} \right\} \\
& \overset{\eta}{\cong_{\text{Set}}} \left\{ f \middle\vert f \in \left( \bigcup_{\alpha \in A} G_{\alpha} \right)^{A}, \forall \: \alpha \in A : f(\alpha) \in G_{\alpha} \right\} \\
& = G
\end{align*}
$$

where $$\displaystyle{\varphi : \prod_{\alpha \in A} G_{\alpha} \to \bigcup_{\alpha \in A} G_{\alpha}}$$ is the bijection,

$$\forall \: U \in \prod_{\alpha \in A} G_{\alpha} : \varphi(U) = \set{U_{\alpha}}{\alpha \in A}$$

with the inverse $$\displaystyle{\varphi^{-1} : \bigcup_{\alpha \in A} G_{\alpha} \to \prod_{\alpha \in A} G_{\alpha}}$$,

$$\forall \: V \in \bigcup_{\alpha \in A} G_{\alpha} : \varphi^{-1}(V) = \left( \alpha \in V \vert \alpha \in V \right)$$

Similarly $$\displaystyle{\eta : }$$ is the bijection $$\displaystyle{\bigcup_{\alpha \in A} G_{\alpha} \to \left( \bigcup_{\alpha \in A} G_{\alpha} \right)^A}$$,

$$\forall \: U \in \bigcup_{\alpha \in A} G_{\alpha} : \eta(U) = \left\{ (\text{preim}_{f}(a), a) \middle\vert a \in U \right\}$$

with the inverse $$\displaystyle{\eta^{-1} : \left(\bigcup_{\alpha \in A} G_{\alpha} \right)^A \to \bigcup_{\alpha \in A} G_{\alpha}}$$,

$$\forall \: V \in \left( \bigcup_{\alpha \in A} G_{\alpha} \right)^A : \eta^{-1}(V) = \text{im}_{f}(V)$$

It can be verified that the composition of the above maps, i.e. is the bijection $$\displaystyle{\eta \circ \varphi : \prod_{\alpha \in A} G_{\alpha} \to G}$$,

$$\forall \: a \in \prod_{\alpha \in A} G_{\alpha} : (\eta \circ \varphi)(a) = \eta(\varphi(a)) = \left\{ (\alpha, a_{\alpha}) \middle\vert \alpha \in A \right\}$$

with the inverse $$(\eta \circ \varphi)^{-1} = \varphi^{-1} \circ \eta^{-1}$$.

- Using the definition of direct products and the condition for group isomorphism,

$$
\begin{align*}
\forall \: a, b \in \prod_{\alpha \in A} G_{\alpha} : (\eta \circ \varphi) (a * b) & = (\eta \circ \varphi) ((a_{\alpha} *_{\alpha} b_{\alpha} \vert \alpha \in A)) \\
& = \{ (\alpha, a_{\alpha} *_{\alpha} b_{\alpha}) \vert \alpha \in A \} \\
& = \{ (\alpha, a_{\alpha}) \vert \alpha \in A \} *_{G} \{ (\alpha, b_{\alpha}) \vert \alpha \in A \} \\
& = (\eta \circ \varphi)(a) *_{G} (\eta \circ \varphi) (b)
\end{align*}
$$

as required.